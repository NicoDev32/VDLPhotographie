# Images du blog VDL Photographe

Les images de couverture des articles sont **déjà en place** : elles réutilisent des
photos déjà présentes dans `src/assets/`, copiées dans `static/blog/` sous des noms
optimisés pour le SEO. Rien n'est obligatoire de votre côté.

## Où se trouvent les images

- **Dossier servi :** `static/blog/`
  (adresse publique : `https://vdlphotographe.fr/blog/<nom-du-fichier>`)
- Le champ `cover` de chaque article (dans `src/data/articles/`) pointe déjà vers
  le bon fichier.

## Correspondance photo réutilisée / article

| Article | Photo existante réutilisée | Fichier dans static/blog/ |
|---|---|---|
| Mariage | `src/assets/mariage1.jpg` | `photographe-mariage-moselle.jpg` |
| Grossesse | `src/assets/grossesse_1.jpg` | `seance-photo-grossesse-moselle.jpg` |
| Naissance | `src/assets/naissance_1.jpg` | `photographe-naissance-nouveau-ne-moselle.jpg` |
| Famille (tenues) | `src/assets/famille_1.jpg` | `tenues-seance-photo-famille.jpg` |
| Lieux Metz / Thionville | `src/assets/famille_5.jpg` | `lieux-seance-photo-metz-thionville.jpg` |
| Studio ou extérieur | `src/assets/portrait_1.jpg` | `seance-photo-studio-exterieur.jpg` |
| Couple | `src/assets/couple.jpg` | `seance-photo-couple-moselle.jpg` |
| Noël | `src/assets/famille_3.jpg` | `mini-seance-photo-noel-moselle.jpg` |
| Prix / tarifs | `src/assets/portrait_moi.jpg` | `prix-photographe-professionnel-moselle.jpg` |
| Portrait | `src/assets/portrait_2.jpg` | `seance-portrait-femme-moselle.jpg` |

## Remplacer une image plus tard (facultatif)

Pour mettre une photo dédiée à un article, il suffit de déposer un nouveau fichier
dans `static/blog/` **en gardant exactement le même nom** que dans la colonne de droite
ci-dessus. Aucune autre modification n'est nécessaire.

Conseils si vous remplacez :
- Format JPEG (`.jpg`), orientation paysage, idéalement 1200 x 800 px.
- Viser moins de 250 Ko (compression web) pour la vitesse de chargement.
- Le texte alternatif (`alt`) est déjà rédigé dans chaque article (champ `coverAlt`).
