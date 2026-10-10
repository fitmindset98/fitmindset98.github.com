# Grip & Brace

Static site. No build step needed to host it.

## Publish on GitHub Pages
1. Create a new public repo, e.g. `gripandbrace`.
2. Upload everything in this folder to the repo root (including the hidden `.nojekyll` file).
3. Repo > Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Live in a minute or two at `https://YOUR-USERNAME.github.io/gripandbrace/`.

## Before you go live
Find and replace `https://YOUR-USERNAME.github.io/gripandbrace` across all files with your real URL
(canonical tags, sitemap, schema, robots.txt, 404 page).
Replace `YOURTAG-20` with your Amazon tracking ID.

## Custom domain
Add a file named `CNAME` containing your domain (e.g. `gripandbrace.com`), point DNS to GitHub Pages,
then repeat the find-and-replace above with the new domain. Submit `/sitemap.xml` in Search Console.
