ng build
git add dist -f
git commit -m "Publishing pages"
git subtree push --prefix dist pages master
