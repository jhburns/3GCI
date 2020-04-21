**Status of:** https://relaxed-brown-a05637.netlify.app/ 

 [![Build Status](https://travis-ci.org/jhburns/3GCI.svg?branch=master)](https://travis-ci.org/jhburns/3GCI)

# GCI Cybersecurity Website

## Download

Either:

- Clone from GitHub with `git clone git@github.com:jhburns/3GCI.git`
- Go to https://github.com/jhburns/3GCI/releases, download the zip, and extract it

## Basic Setup
- To run the website, first install [node](https://nodejs.org/en/) and then [yarn](https://yarnpkg.com/lang/en/)

- Then in the root directory of this site (*/3GCI/*) run `yarn`

- To open the website in your browser run `yarn fastball` and go to http://localhost:1313/ after the command is loaded

## Command overview
Because of node, there are multiple shortcuts used to automate the site. To use each of them type `yarn [command]`, example: `yarn make`

- **watch**: Automatically recompiles sass (*.scss files in *.../scr/scss*) so style can be developed quickly
- **start**: Starts the hugo server, which automatically watches files and rebuilds after changes and severs the content.
- **fastball**: Runs yarn (developer) once then launches hugo. Useful for quickly looking at the site
- **clean**: A custom script that deletes all the generated files. **wipe** deletes everything, like all of the node modules, it is NOT recommended. 

- **new /blog/[title].md**: Makes a new blog post with the given title in */content/blog*. Don't forget to add and commit it through git.
- **new-link [filename]** and **new-peep [filename]** both make a new empty file from template in */data/link* or */data/people* respectively. 
- **upload**: after adding new blog, data, or an image, this is a shortcut to add it to git automatically.

- **thumbs**: generates all the the thumbnails for each link. Useful for testing if a webpage generates a thumbnail well and runs before all build commands. 

## How To Add a Video To The Home Page

In *config.toml* edit the values under these lines: https://git.io/fhheM.

## Documentation
Go to the  */Documentation* folder for full documentation

## About

Created by Jonathan H. Burns for GCI Cybersecurity team. 

Under the CC-BY-NC-SA-4.0 licence.

Version 1.1.1
