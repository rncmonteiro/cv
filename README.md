# Academic CV — easy-edit GitHub Pages version

This version uses **Jekyll**, which GitHub Pages builds automatically. You do not need to install Jekyll or run a build command.

## Editing content directly on GitHub

1. In the repository, open `_includes/content/`.
2. Click the relevant file, e.g. `projects.md` or `journal-articles.md`.
3. Click the pencil icon, edit, and **Commit changes**.
4. Wait 1–3 minutes for GitHub Pages to rebuild.

Each CV section is a separate, plain-text **Markdown** file. All existing sections are included; you can add, remove, or reorder items.

Markdown examples:

    ## Research projects

    - **2026** — A new research project with a [project link](https://example.org).
    - **2025** — Another project.

To add a new section, create `_includes/content/new-section.md`, then add a section block to `_layouts/default.html` following an existing section, and add a menu link if desired.

To hide a section, delete its `<section ...> ... </section>` block in `_layouts/default.html` (or remove its Markdown entries and menu link).

## Other edits

- **Name, intro, contact, menu, photo placement:** `_layouts/default.html`.
- **CV section text:** `_includes/content/*.md`.
- **Colours, fonts, spacing:** `styles.css`.
- **Portrait and IUSS logo:** `assets/`.
- **No downloadable DOCX:** The website is the online CV; no CV download link or DOCX file is included.

## GitHub Pages setup

Upload the **contents** of this ZIP into your repository root, keeping the `_includes` and `_layouts` folder names exactly. In **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`.

**Important:** GitHub's upload interface may not overwrite files automatically in every workflow. Check that old `index.html` has been deleted: if both `index.html` and `index.md` exist, the old HTML page can take precedence. Remove the old `index.html` before publishing this version. Also remove any obsolete pages if you no longer want them publicly accessible.

This design uses Jekyll's built-in Markdown support and no third-party plugins.

## Publication numbering

In the two publication Markdown files, keep the publication number as bold text at the start of each paragraph, e.g. `**100.** Authors, title...`. Leave a blank line between entries. This preserves original numbering instead of auto-numbering every entry as 1.


## Journal article links
Verified article links have been added to selected entries in `_includes/content/journal-articles.md`. Other entries remain unlinked until their exact publisher pages can be verified. Add links using `[Article page](https://doi.org/...)`.
