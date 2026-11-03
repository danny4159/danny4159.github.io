# Daniel Kim — Academic Homepage (v3)

A static, responsive academic homepage for GitHub Pages, using the existing repository `danny4159.github.io`.

## Deployment

1. Unzip this package.
2. Open https://github.com/danny4159/danny4159.github.io → Add file → Upload files.
3. Drag the **contents** of the unzipped folder (not the folder itself) into the upload area. Preserve the `assets/` directories.
4. Commit changes on the `main` branch.
5. Under Settings → Pages, keep `Deploy from a branch` → `main` → `/(root)`.
6. Check https://danny4159.github.io after the GitHub Pages workflow completes.

GitHub updates existing files with matching names. The old `assets/figures/wacv-registformer-schematic.svg` (from v2) is no longer referenced and can be deleted manually if desired.

## Contents

- `index.html` — all text, link and publication metadata.
- `styles.css` — layout and visual appearance.
- `script.js` — figure zoom / close.
- `assets/profile/daniel-kim.jpg` — uploaded portrait.
- `assets/figures/*.png` — original user-supplied figures, plus RbG figure from previously provided manuscript.
- `assets/figures/*-thumb.webp` — optimized thumbnail previews.
- `assets/papers/*.pdf` — local ISMRM 2023 and 2024 enlarged-figure abstracts.

## Publication grouping

- First-Author Work: JBHI 2026, WACV 2025, ISMRM 2024, ISMRM 2023.
- Co-authored Work: ECCV 2026 (DRIFT), CMIG 2025.

IF numbers refer to the 2025 Journal Impact Factor (Clarivate JCR, published in 2026): JBHI 7.7, CMIG 5.5. Conferences and abstracts have no journal impact factor. The CMIG thumbnail uses a related ISMRM 2024 reweighting diagram, explicitly labeled in the image caption.

The site is independent of Jekyll (`.nojekyll`) and can be edited in GitHub's web editor.
