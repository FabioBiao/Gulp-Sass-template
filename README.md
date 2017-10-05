# sass and gulp

## 1# Install [node](https://nodejs.org/en/)

## 2# Install npm 
Open console "npm install npm -g"

- some extra commands that may be usefull
npm init //This will run through creating the package.json file
npm install -g gulp //If you haven't installed gulp globally before


## 3# Install gulp and sass
on the console write the following commands:
npm install gulp
npm install gulp-sass

## 4# set you gulpfile.js with the desired tasks. 
On Gulpfile:
Task 1: is to compile or .scss files into a main.css 
Task 2: is the default gulp. With a watch, every time you update a scss file it will generate a new main.css

## 5# All done, after this point just go to console and write "gulp" and you will start generating your css files. 
Or use a task example of tasks on our gulpfile:
gulp styles
gulp main-styles
gulp scripts
gulp min-scripts

## 6# 
If you want to concat all files into one. This is usefull to create main.css for example. 
Wrote this part with a diffrent syntax on gulpfile. You can try and see what works for you. 

npm install gulp-concat gulp-rename gulp-uglify --save-dev

Task 3 and 4 on gulpfile, concat everything in one file. main.css and script.js or script.min.js(uglify)