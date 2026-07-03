# Images du blog VDL Photographe

Les images de couverture des articles sont **déjà en place** dans `static/blog/`, sous
des noms optimisés pour le SEO. La plupart utilisent désormais des photos dédiées
(fournies par vos soins) ; deux réutilisent encore une photo du site. Toutes sont
compressées en JPEG (< 250 Ko) pour un chargement rapide.

## Où se trouvent les images

- **Dossier servi :** `static/blog/`
  (adresse publique : `https://vdlphotographe.fr/blog/<nom-du-fichier>`)
- Le champ `cover` de chaque article (dans `src/data/articles/`) pointe déjà vers
  le bon fichier.

## Correspondance photo réutilisée / article

| Article | Photo utilisée | Fichier dans static/blog/ |
|---|---|---|
| Mariage | Photo dédiée | `photographe-mariage-moselle.jpg` |
| Grossesse | Photo dédiée | `seance-photo-grossesse-moselle.jpg` |
| Naissance | Photo dédiée | `photographe-naissance-nouveau-ne-moselle.jpg` |
| Famille (tenues) | `src/assets/famille_1.jpg` (réutilisée) | `tenues-seance-photo-famille.jpg` |
| Studio ou extérieur | Photo dédiée | `seance-photo-studio-exterieur.jpg` |
| Couple | Photo dédiée | `seance-photo-couple-moselle.jpg` |
| Noël | Photo dédiée | `mini-seance-photo-noel-moselle.jpg` |
| Prix / tarifs | `src/assets/portrait_moi.jpg` (réutilisée) | `prix-photographe-professionnel-moselle.jpg` |
| Portrait | Photo dédiée | `seance-portrait-femme-moselle.jpg` |

## Remplacer une image plus tard (facultatif)

Pour mettre une photo dédiée à un article, il suffit de déposer un nouveau fichier
dans `static/blog/` **en gardant exactement le même nom** que dans la colonne de droite
ci-dessus. Aucune autre modification n'est nécessaire.

Conseils si vous remplacez :
- Format JPEG (`.jpg`), orientation paysage, idéalement 1200 x 800 px.
- Viser moins de 250 Ko (compression web) pour la vitesse de chargement.
- Le texte alternatif (`alt`) est déjà rédigé dans chaque article (champ `coverAlt`).
