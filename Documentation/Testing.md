https://travis-ci.org/jhburns/3GCI.svg?branch=master

# Testing
Testing is carried out by https://travis-ci.org/ which is free for open source projects.

The current build status can be seen here and in the first README. 

## What
There are two commands that are run `npm test`, which test to see if everything compiles and `hugo` which tests if the site is build.
If both of these commands exit with a code of 0, the website is running properly. Other codes like 1 result in a failed test.
The site is retested every time a new push is done to the master.

## Why

This is mostly to check if netlify is updating the site, because a failure on nelify's part just serves the site from last change.

## Advanced

##### Install
The *.travis.yml* file first tells travis to use node, and then run npm install.
Next, hugo is manually downloaded and installed because apt-get support is broken for some reason.

#### Script
Both the previous two commands are run as tests under the 'script' section 

## Advanced
- *before install* section is used to install apt packages that are needed to compile mozjpeg because its binaries fail.
- *|| exit 0* makes sure that cleaning is successful, because it is optional
- *cache yarn* tells it to cache packages   