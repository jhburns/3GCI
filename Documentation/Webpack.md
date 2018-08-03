# Webpack
Webpack is used to automate many process in this site and compiles javascript and sass and compresses images. Run with ```yarn webpack``` although custom commands are prefered.

## What

Adds all assets in to the */created* folder in */static/*

- sass file are compiled into *main.css*

- javascript files are given the webpack wrapper and added to the *js/scripts.js*. *no_scroll.js* is currently the only used js file and it prevents the background from scrolling when the menu is open. *console_out.js* tests if scripts are loading correctly.

- */created-icons* is every single icon needed for each computer type. Some of *icons.html* should be copied into the header partial.

- */img* is where all compressed images go, currently .png, .jpg, and .svg are supported. Because they are all in the same folder none should have the same name.  

## Why
Webpack is the best automation option unfortunately.

## Advanced

 - There are two configuration files, one production and one for development. The production one does everything while development leaves out some image compression and icon generation to save speed.
   
 - Whenever a js file is loaded it cannot be from basURL and has to have a relative link to be executed in browser
 
 - .jpgs are compressed lossy because the lossless package throws an error  