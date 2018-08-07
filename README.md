**Status of:** https://relaxed-brown-a05637.netlify.com/

 [![Build Status](https://travis-ci.org/jhburns/3GCI.svg?branch=master)](https://travis-ci.org/jhburns/3GCI)

# GCI Cybersecurity Website

## Download

Either:

- Clone from GitHub with `git clone git@github.com:jhburns/3GCI.git`
- Go to https://github.com/jhburns/3GCI/releases, download the zip, and extract it

## Basic Setup
To run the website, first install [yarn](https://yarnpkg.com/lang/en/)

Then in the root directory of this site (./3GCI) run `yarn install`

To open the site in your browser run `yarn fastball` and go to http://localhost:1313/

## Command overview
Because of node, there are multiple shortcuts used to automate the site. To use each of them type `yarn [command]`, example: `yarn make`

- **watch**: Automatically recompiles sass (*.scss files in .../scr/scss) so style can be developed quickly
- **start**: Starts the hugo server, which automatically watches files and rebuilds after changes and severs the content.
- **fastball**: Runs yarn (developer) once then launches hugo. Useful for quickly looking at the site
- **test**: Used to check if production is functioning correctly
- **clean**: A custom script that deletes all the generated files

- **new /blog/[title].md**: Makes a new blog post with the given title in */content/blog*. Don't forget to add and commit it through git.

- **thumbs**: generates all the the thumbnails for each link. Useful for testing if a webpage generates a thumbnail well and runs before all build commands. 
   
## Documentation
Go to the  */Documentation* folder for full documentation

## About

Created by Jonathan H. Burns for GCI Cybersecurity team. 

cdUnder the CC-BY-NC-SA-4.0 licence.

Version 0.4.5