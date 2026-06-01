# Take Apart Lab : DFM&A Analysis

A single-page static site for EDES 350 Take Apart Lab assignment.
Push to GitHub Pages and submit the URL as the assignment deliverable.

## Files

```
takeapart_lab_website/
├── index.html       ← the page. Edit the placeholder content directly.
├── styles.css       ← design system. Tokens at the top, components below.
├── script.js        ← scroll reveal + nav border. ~20 lines.
└── assets/          ← drop your photos here (see each subfolder README)
    ├── failures/    failure-01.jpg through failure-10.jpg
    ├── items/       item-01.jpg through item-04.jpg + group-shot.jpg
    ├── decon/       step-01.jpg, step-02.jpg, ..., exploded-view.jpg
    └── manufacturing/ process-01.jpg through process-03.jpg
```

## How to use

1. **Edit `index.html`** : every block of placeholder text is wrapped in
   either `<em>Replace this...</em>` or has obvious placeholder copy
   ("Failure title goes here", "Item name goes here"). Search-and-replace
   each one with your real content.
2. **Drop images** into the matching subfolder under `assets/`, using the
   file names already referenced in `index.html`. The CSS handles all
   sizing, cropping, and hover states.
3. **Add more failures** by copying any `<article class="failure">` block.
   Numbering is manual (the `<div class="failure__num">` shows it).
4. **Add more deconstruction steps** by copying any `<article class="step">`
   block. The number auto-increments via CSS counters.
5. **Add or remove BOM rows** by copying any `<tr>` inside the table.

## Design system tokens

Top of `styles.css`. Change once, propagates everywhere:

- `--paper` : cream background
- `--ink` : near-black text
- `--accent` : tobacco/oxblood used for italic accents and arrows
- `--serif` : Cormorant Garamond, for headings and italic accents
- `--sans` : Inter, for body and UI labels

## Animation behaviour

- Nav gains a thin border once you scroll past the top
- Anything with class `reveal` fades up when entering the viewport
- Anything with class `reveal-stagger` does the same with a 120ms delay per child
- Hover on images: slow 1.04× zoom
- Reduced motion preference is respected

## Deploy to GitHub Pages

1. Push this folder to a new GitHub repo.
2. Settings → Pages → Source = main branch / root.
3. Visit `https://<your-username>.github.io/<repo-name>/`.

## Credits

Design inspired by [Jacques Marie Mage](https://jacquesmariemage.com/) and
[Margot Priolet](https://www.margotpriolet.com/). Credit is in the page
footer.
