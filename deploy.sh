npm run build
git add dist
git commit -m 'update gh-pages'
git subtree push --prefix dist origin gh-pages
