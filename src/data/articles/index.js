// Index des articles du blog VDL Photographe
// Chaque article est un module CommonJS dans ce dossier.
// Ce fichier est consomme a la fois par nuxt.config.js (build) et par les pages Vue.

const articles = [
  require('./comment-choisir-photographe-mariage-moselle'),
  require('./quand-faire-seance-photo-grossesse'),
  require('./photo-naissance-7-14-jours'),
  require('./tenues-seance-photo-famille'),
  require('./lieux-seance-photo-exterieur-metz-thionville'),
  require('./studio-ou-exterieur-seance-photo'),
  require('./idees-seance-photo-couple'),
  require('./mini-seance-photo-noel-moselle'),
  require('./prix-photographe-professionnel-moselle'),
  require('./reussir-seance-portrait-femme'),
]

// Trie du plus recent au plus ancien (par date de publication)
const sorted = articles.slice().sort((a, b) => (a.date < b.date ? 1 : -1))

module.exports = sorted
module.exports.articles = sorted
module.exports.getBySlug = function getBySlug(slug) {
  return sorted.find(a => a.slug === slug) || null
}
