# Overview of Documentation

**Files.md**: Major file overview

**Folders.md**: Major Folder overview

**Hugo.md**: Static site generator information

**Testing.md**: Travis information

**Webpack.md**: Automation/compiling information

**Netlify.md**: Hosting information

**Blog.md**: Info about how to make a new blog post

It is recommended to view these files either in GitHub, or to install the plugin to view Markdown files in WebStorm. https://plugins.jetbrains.com/plugin/7793-markdown-support

# How It's Made

# Overview
The whole website is made using [node.js](https://nodejs.org/en/) and uses npm or [yarn](https://yarnpkg.com/en/) to install all the packages needed.

[Webpack](https://webpack.js.org/) is used to do pre-processing on assets and automates much of the workflow.

[Hugo](https://gohugo.io/) then builds all of the website pages.
 
# Build Options

There are two main options for building, development and production

### Development
This form of building is supposed to be quick and constantly updating to make changes easy to test.
Two commands need to be run to build this.
- `yarn run start` runs hugo which rebuilds the website after each change. Drafts are also build.
- `yarn run watch` runs webpack, which only watches images and sass in this mode.

None of these commands should be run outside of a dev computer.

### Production 
Only one command needs to be run `yarn run make`. Netlify uses this to build the site and all assets are compiled in this mode. Drafts are not built. It is recommended that this command is run before pushing to check for any production issues ahead of time. The site is not make on continuously and is found in */pubic*.
