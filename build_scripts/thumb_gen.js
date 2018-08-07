// Thumbnail scraper

// All files are read in, and all images are processed asynchronously so this script is super fast
// Main bottleneck is internet speed

var version = '0.0.5';

// input/output
const colors = require('colors');
const input_folder = './data/links/';
const output_folder = './themes/GCI/scr/img/thumbnails/';

console.log(colors.green("\nThumbnail generator ") + version);

// Needed to figure out which img is best from a url
var Scraper = require('scraper-js');
var scraper = new Scraper.Scraper();

// Nedded to read in file and convert toml to javascript object
var fs = require('fs');
var toml = require('toml');

// Pretty clearly needed to download img
var download = require('download-file');

//get all dirs
fs.readdir(input_folder, (err, files) => {
    if (err) {
        console.log(colors.red("Error getting files:"));
        console.log(err);
        return;
    } else {
        //for each file
        files.forEach(function(filename) {
            fs.readFile(input_folder + filename, 'utf-8', function(err, content) {
                if (err) {
                    console.log(colors.red("Error reading file:"));
                    console.log(err);
                    return;
                }
                
                try {
                    //toml parsing
                    var file = toml.parse(content);
                    if (file.hasOwnProperty('link') && file.hasOwnProperty('enable_thumb') && file.hasOwnProperty('thumb_img')) {
                        scraper.scrape(file.link).then(function (thumbs) {

                            var options = {
                                directory: output_folder,
                                filename: file.thumb_img + ".thm"
                            };

                            if (file.enable_thumb) {
                                //image downloading
                                download(thumbs[0], options, function (err) {
                                    if (err) {
                                        console.log(colors.red("Error: could not download"));
                                        console.log(err);
                                    }

                                    //Output
                                    console.log(colors.bold("Created: ") + options.filename + colors.bold(" For: ") + filename);

                                });
                            }

                        });
                    }
                } catch (e) {
                    console.error(colors.red("Error: Parsing error") + e.message);
                }
            });
        });
    }
});

