# Search
Run with `yarn lunar`. 

## Basics
If you adding content to this site all you need to know is that the title and description are used to create the search data. The file has to be in */content* to be searched.

## Advanced
Because this is a static site, search is the hardest part to implement. Because google refuses to index this site, we can't use their search engine (also why random snippets and scripts for google show up). However all searching is not fully autnomated.

As an overview here is how the search work: Grunt generates a .json file that is served with each webpage, then lunr.js renders then on the client side, using bootstrap to open a pop-up modal.

### Grunt

[Grunt](https://gruntjs.com/) is used instead of webpack because of the example for all this uses it. 

The config for it is */build_scripts/Gruntfile.js*.

The output is put in */themes/GCI/create/js/jason/PagesIndex.json*. This file does not need to be put through webpack because it is already minimized.

Here is how it tracks data (anything left out is ignored):

- `title`: used both for data and search
- `desciption`: used for data and search
- `slug`: only used as data
- `content`: used only for search

Data is used as part of the search packet (url, anything displayed), which search is anything that lunr indexes.

## lunr

[lunr](https://lunrjs.com) Is a fast and lightweight front-end javascript search engine. It downloaded in the *scripts.html* partial and is run with the *search.js* file. Like the other files in */themes/GCI/scr/js* that is compiled with webpack.

To work, lunr injects the search results into the modal from one of the three search bars.

