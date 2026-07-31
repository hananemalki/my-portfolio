# Portfolio — Malki Hanane

Application React (Vite) — Node.js requis.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvre l'URL affichée dans le terminal (généralement http://localhost:5173).

## Build de production

```bash
npm run build
npm run preview   # pour tester le build localement
```

Le résultat statique est généré dans `dist/`, déployable sur Vercel, Netlify, GitHub Pages, etc.

## CV téléchargeable

Place ton fichier PDF dans `public/CV-Malki-Hanane.pdf` (même nom). Le bouton "Télécharger mon CV" du hero pointe déjà vers ce chemin.

## Structure

```
src/
  data.js              → tout le contenu (profil, expériences, compétences, formation...)
  hooks/useReveal.js    → hook d'apparition au scroll (IntersectionObserver)
  components/
    Nav.jsx             → navigation sticky avec lien actif
    Hero.jsx             → en-tête + carte "aperçu rapide"
    About.jsx
    Experience.jsx       → timeline d'expérience
    Skills.jsx            → grille de compétences par catégorie
    Education.jsx         → formation, certifications, langues
    Contact.jsx
    Footer.jsx
    Reveal.jsx             → wrapper d'animation au scroll
```

Pour modifier le contenu (expériences, compétences, certifications...), édite uniquement `src/data.js` — aucun changement de composant n'est nécessaire.
