npm run build
git -r dist
git add dist
git commit -m 'update gh-pages'
git subtree push --prefix dist origin gh-pages
