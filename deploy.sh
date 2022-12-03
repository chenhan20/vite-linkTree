npm run build
git rm -r --cached dist
git subtree push --prefix dist origin gh-pages
git add dist
git commit -m 'update gh-pages'
git subtree push --prefix dist origin gh-pages
