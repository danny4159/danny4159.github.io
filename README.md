# Daniel Kim — Academic Homepage (v2)

Static GitHub Pages site (HTML, CSS and vanilla JS). No npm, Jekyll, or build process needed.

## What changed
- Narrower 258 px desktop sidebar and local profile photo.
- Simplified About and Research interests; removed the broad claim “Reliable AI”.
- Five publication/abstract entries with explanatory method thumbnails.
- Click a figure to enlarge in a modal; click **Open full image** for its original-size file.
- ISMRM 2023/2024 have both official **Abstract** links and self-hosted **PDF** links (enlarged figures).

## Update your existing GitHub Pages site

1. Open https://github.com/danny4159/danny4159.github.io and switch to **Code**.
2. Upload the contents of this folder to the **root** of the existing repository (`main` branch):
   `index.html`, `styles.css`, `script.js`, `favicon.svg`, `.nojekyll`, and the entire `assets/` folder.
3. Overwrite the old `index.html` and `styles.css` on GitHub (keep the same names).
4. Commit changes. Keep **Settings → Pages → Deploy from a branch → main → /(root)**.
5. Visit https://danny4159.github.io and hard-reload with Ctrl + F5.

**Important:** GitHub's browser uploader may not replace existing files by drag & drop alone depending on the interface. The reliable option is to edit/replace via the web editor, GitHub Desktop, or Git (see below). For a first-time batch update, Git command-line is simplest:

```bash
git clone https://github.com/danny4159/danny4159.github.io.git
cd danny4159.github.io
# Copy ALL files from the extracted ZIP into this repository, preserving assets/ hierarchy.
git add -A
git commit -m "Update academic homepage with figures and PDFs"
git push origin main
```

## Local PDFs

- `assets/papers/ISMRM_2023_Abstract_Enlarged_Figures.pdf` — uploaded abstract with enlarged Figures 1–4.
- `assets/papers/ISMRM_2024_Abstract_Enlarged_Figures.pdf` — uploaded abstract with enlarged Figures 1–4.

## Method figures

- JBHI 2026: **Fig. 1** from an author-provided revision PDF (extracted locally).
- CMIG 2025: **Related meta-learning Figure 2** supplied for ISMRM 2024, not represented as an original CMIG figure.
- WACV 2025: **Simplified, labeled redraw** of the RegistFormer pipeline. Exact published Figure 2 is linked as **PDF / Fig. 2**. Replace `assets/figures/wacv-registformer-schematic.svg` with your original, author-owned Figure 2 image if available and update `index.html` accordingly.
- ISMRM 2024: **Figure 1**, original image supplied by the author.
- ISMRM 2023: **Figure 1**, original image supplied by the author.

These labels avoid misrepresenting illustrations that are not taken verbatim from the respective published articles.

AAAI-27 MIGS is not publicly listed while under review.
