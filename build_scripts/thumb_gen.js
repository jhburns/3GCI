// Thumbnail scraper

// All files are read in, and all images are processed asynchronously so this script is super fast
// Main bottleneck is internet speed

var version = '0.1.0';

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
        return 1;
    } else {
        //for each file
        var numFiles = 0;

        files.forEach(function(filename) {
            fs.readFile(input_folder + filename, 'utf-8', function(err, content) {
                if (err) {
                    console.log(colors.red("Error reading file:"));
                    console.log(err);
                    return 1;
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
                                        return 1;
                                    }

                                    //Output
                                    console.log("Created: " + colors.bold(options.filename) + " \tFor: " + colors.bold(filename)
                                                + colors.dim('\t(' + (numFiles + 1) + '/' + files.length + ')'));

                                    //Checks if all are done
                                    //I don't know how to do callbacks :(
                                    numFiles++;
                                    if (numFiles == files.length) {
                                        console.log(colors.green("Done Generating ALL Thumbnails"));
                                        console.log();
                                    }
                                });
                            } else {
                                numFiles++;
                            }

                        });
                    } else {
                        numFiles++;
                    }
                } catch (e) {
                    console.error(colors.red("Error: Parsing error") + e.message);
                    return 1;
                }

            });
        });
    }
});


