# adouiyeh.github.io

A Jekyll blog using [Beautiful Jekyll](https://beautifuljekyll.com/) as a remote theme and deployed with GitHub Pages.

## Local Development

1. Install Ruby and Bundler.
2. Install dependencies:

   ```bash
   bundle install
   ```

3. Start the local server:

   ```bash
   bundle exec jekyll serve
   ```

4. Open <http://localhost:4000>.

## Content

- Blog posts live in `_posts/` and use the `YYYY-MM-DD-title.md` naming format.
- Pages live in `pages/`.
- Site-wide settings, navigation, social links, colors, and the Beautiful Jekyll remote theme are configured in `_config.yml`.

## Deployment

GitHub Actions builds and deploys the site with `.github/workflows/pages.yml` on pushes to `main` or `master`.
