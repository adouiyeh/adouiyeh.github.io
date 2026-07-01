# adouiyeh.github.io

A personal blog and portfolio site built with Jekyll and hosted on GitHub Pages.

## Local development

1. Install Ruby and Bundler if needed.
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Start the local server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open http://localhost:4000 in your browser.

## Add new content

- Blog post: create a new markdown file in `_posts/` using the `YYYY-MM-DD-title.md` format.
- Portfolio project: add an entry to `_data/projects.yml`.
- New page: create a markdown file in `pages/` and set the front matter with `layout: default`.

## Deployment

This repository includes a GitHub Pages workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml) for automated deployment from the `main` branch.

If you host this as a user site, keep the site at the repository root. If you prefer a project site, update the `baseurl` setting in `_config.yml` accordingly.
