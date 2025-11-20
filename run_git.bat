@echo off
git add .
git commit -m "Update project images and layout"
git push > push_output.txt 2>&1
echo DONE >> push_output.txt
