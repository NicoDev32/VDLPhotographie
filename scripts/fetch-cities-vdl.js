#!/usr/bin/env node
/**
 * Récupère les communes françaises (depts 57, 54, 55, 67) + communes
 * luxembourgeoises dans un rayon de 40 km depuis Clouange,
 * puis exporte dans src/data/citiesVdl.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Coordonnées de Clouange (home-studio de VDL Photographe)
const CLOUANGE = { lat: 49.2797, lng: 6.1028 };
const MAX_KM = 40;

// Haversine (retourne la distance en km)
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'VDLPhotographe-SEO-script/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`JSON parse error for ${url}: ${e.message}`));
        }
      });
    }).on('error', reject);
  });
}

// Pause pour respecter les rate-limits des APIs
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchFrenchCommunes(deptCode) {
  const url = `https://geo.api.gouv.fr/departements/${deptCode}/communes?fields=nom,code,centre,population,codesPostaux`;
  console.log(`  Fetching dept ${deptCode}...`);
  const communes = await fetchJson(url);
  await sleep(300);
  return communes;
}

async function fetchLuxembourgCommunes() {
  // Overpass API: communes (admin_level 8) au Luxembourg
  // Bounding box large autour de Clouange : lat 49.0-49.9, lng 5.7-6.8
  const query = encodeURIComponent(`
[out:json][timeout:60];
(
  relation["boundary"="administrative"]["admin_level"="8"]["addr:country"="LU"];
);
out center;
  `.trim());
  const url = `https://overpass-api.de/api/interpreter?data=${query}`;
  console.log('  Fetching Luxembourg communes via Overpass...');
  try {
    const result = await fetchJson(url);
    return result.elements || [];
  } catch (e) {
    console.warn('  Overpass API unavailable, trying fallback with Nominatim search...');
    return [];
  }
}

async function fetchLuxNominatim() {
  // Fallback: liste manuelle des principales localités luxembourgeoises proches
  // Requête Nominatim pour les villes/towns/villages au Luxembourg
  const url = `https://nominatim.openstreetmap.org/search?country=lu&format=json&limit=200&featuretype=settlement&addressdetails=1`;
  console.log('  Fetching Luxembourg via Nominatim...');
  try {
    const results = await fetchJson(url);
    await sleep(1000);
    return results;
  } catch (e) {
    console.warn('  Nominatim also failed:', e.message);
    return [];
  }
}

async function main() {
  console.log('\nVDL Photographe - Récupération des communes\n');
  console.log(`Centre : Clouange (${CLOUANGE.lat}°N, ${CLOUANGE.lng}°E)`);
  console.log(`Rayon max : ${MAX_KM} km\n`);

  const allCities = [];

  // Départements français
  const depts = [
    { code: '57', name: 'Moselle', departmentCode: '57' },
    { code: '54', name: 'Meurthe-et-Moselle', departmentCode: '54' },
    { code: '55', name: 'Meuse', departmentCode: '55' },
    { code: '67', name: 'Bas-Rhin', departmentCode: '67' },
  ];

  console.log('=== Communes françaises ===');
  for (const dept of depts) {
    try {
      const communes = await fetchFrenchCommunes(dept.code);
      let count = 0;
      for (const c of communes) {
        if (!c.centre || !c.centre.coordinates) continue;
        const [lng, lat] = c.centre.coordinates;
        const dist = haversine(CLOUANGE.lat, CLOUANGE.lng, lat, lng);
        if (dist > MAX_KM) continue;

        const cp = (c.codesPostaux && c.codesPostaux[0]) || '';
        allCities.push({
          name: c.nom,
          slug: toSlug(c.nom),
          population: c.population || 0,
          postalCode: cp,
          lat: Math.round(lat * 10000) / 10000,
          lng: Math.round(lng * 10000) / 10000,
          department: dept.name,
          departmentCode: dept.code,
          country: 'FR',
          distanceKm: Math.round(dist * 10) / 10,
        });
        count++;
      }
      console.log(`  Dept ${dept.code}: ${count} communes retenues (sur ${communes.length})`);
    } catch (e) {
      console.error(`  Erreur dept ${dept.code}:`, e.message);
    }
  }

  // Luxembourg via Overpass
  console.log('\n=== Communes luxembourgeoises ===');
  let luxElements = await fetchLuxembourgCommunes();

  if (luxElements.length > 0) {
    let luxCount = 0;
    for (const el of luxElements) {
      const lat = el.center ? el.center.lat : el.lat;
      const lng = el.center ? el.center.lon : el.lon;
      if (!lat || !lng) continue;
      const dist = haversine(CLOUANGE.lat, CLOUANGE.lng, lat, lng);
      if (dist > MAX_KM) continue;

      const name = el.tags && (el.tags['name:fr'] || el.tags.name);
      if (!name) continue;

      allCities.push({
        name,
        slug: toSlug(name),
        population: el.tags && el.tags.population ? parseInt(el.tags.population) : 0,
        postalCode: (el.tags && el.tags['addr:postcode']) || '',
        lat: Math.round(lat * 10000) / 10000,
        lng: Math.round(lng * 10000) / 10000,
        department: 'Luxembourg',
        departmentCode: 'LU',
        country: 'LU',
        distanceKm: Math.round(dist * 10) / 10,
      });
      luxCount++;
    }
    console.log(`  ${luxCount} communes luxembourgeoises retenues`);
  } else {
    // Fallback: liste statique des communes luxembourgeoises dans le rayon
    console.log('  Utilisation de la liste statique Luxembourg...');
    const luxStatic = [
      { name: 'Esch-sur-Alzette', lat: 49.4958, lng: 5.9806, pop: 35500, cp: '' },
      { name: 'Dudelange', lat: 49.4806, lng: 6.0867, pop: 21000, cp: '' },
      { name: 'Differdange', lat: 49.5231, lng: 5.8917, pop: 27000, cp: '' },
      { name: 'Sanem', lat: 49.5456, lng: 5.9453, pop: 15000, cp: '' },
      { name: 'Mondercange', lat: 49.5431, lng: 5.9931, pop: 9000, cp: '' },
      { name: 'Kaerjeng', lat: 49.5531, lng: 5.8831, pop: 8500, cp: '' },
      { name: 'Schifflange', lat: 49.5031, lng: 6.0167, pop: 8800, cp: '' },
      { name: 'Rumelange', lat: 49.4606, lng: 6.0281, pop: 5500, cp: '' },
      { name: 'Kayl', lat: 49.4756, lng: 6.0306, pop: 9500, cp: '' },
      { name: 'Tetange', lat: 49.4706, lng: 5.9978, pop: 1800, cp: '' },
      { name: 'Foetz', lat: 49.5356, lng: 6.0042, pop: 2000, cp: '' },
      { name: 'Leudelange', lat: 49.5581, lng: 6.0664, pop: 3500, cp: '' },
      { name: 'Roeser', lat: 49.5356, lng: 6.1281, pop: 6500, cp: '' },
      { name: 'Hesperange', lat: 49.5672, lng: 6.1617, pop: 14000, cp: '' },
      { name: 'Luxembourg', lat: 49.6117, lng: 6.1319, pop: 128000, cp: '' },
      { name: 'Petange', lat: 49.5572, lng: 5.8822, pop: 18500, cp: '' },
      { name: 'Bettembourg', lat: 49.5131, lng: 6.1014, pop: 11500, cp: '' },
      { name: 'Frisange', lat: 49.4714, lng: 6.1742, pop: 6200, cp: '' },
      { name: 'Bous', lat: 49.4536, lng: 6.2186, pop: 1500, cp: '' },
      { name: 'Stadtbredimus', lat: 49.4603, lng: 6.2939, pop: 1800, cp: '' },
      { name: 'Lenningen', lat: 49.4411, lng: 6.2242, pop: 2500, cp: '' },
      { name: 'Mondorf-les-Bains', lat: 49.5025, lng: 6.2817, pop: 5500, cp: '' },
    ];

    for (const c of luxStatic) {
      const dist = haversine(CLOUANGE.lat, CLOUANGE.lng, c.lat, c.lng);
      if (dist > MAX_KM) continue;
      allCities.push({
        name: c.name,
        slug: toSlug(c.name),
        population: c.pop,
        postalCode: c.cp,
        lat: c.lat,
        lng: c.lng,
        department: 'Luxembourg',
        departmentCode: 'LU',
        country: 'LU',
        distanceKm: Math.round(dist * 10) / 10,
      });
    }
    console.log(`  ${allCities.filter(c => c.country === 'LU').length} communes luxembourgeoises retenues (liste statique)`);
  }

  // Dédoublonner par slug
  const seen = new Set();
  const unique = allCities.filter(c => {
    if (seen.has(c.slug)) return false;
    seen.add(c.slug);
    return true;
  });

  // Trier par distance
  unique.sort((a, b) => a.distanceKm - b.distanceKm);

  // Résumé
  console.log(`\n=== RÉSUMÉ ===`);
  console.log(`Total communes retenues : ${unique.length}`);
  console.log(`La plus proche : ${unique[0].name} (${unique[0].distanceKm} km)`);
  console.log(`La plus lointaine : ${unique[unique.length - 1].name} (${unique[unique.length - 1].distanceKm} km)`);
  console.log(`Par département :`);
  const byDept = {};
  for (const c of unique) {
    const key = `${c.departmentCode} - ${c.department}`;
    byDept[key] = (byDept[key] || 0) + 1;
  }
  for (const [k, v] of Object.entries(byDept)) {
    console.log(`  ${k}: ${v}`);
  }

  // Export JS
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'citiesVdl.js');
  const jsContent = `// Généré automatiquement par scripts/fetch-cities-vdl.js
// ${unique.length} communes dans un rayon de ${MAX_KM} km autour de Clouange

export const citiesVdl = ${JSON.stringify(unique, null, 2)};

export default citiesVdl;
`;

  fs.writeFileSync(outputPath, jsContent, 'utf8');
  console.log(`\nFichier exporté : ${outputPath}`);
}

main().catch(err => {
  console.error('\nErreur fatale:', err);
  process.exit(1);
});
