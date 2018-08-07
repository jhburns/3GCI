// Thumbnail scraper
var version = '0.0.3';
const colors = require('colors');
const input_folder = './data/links/';
const output_folder = './themes/GCI/scr/img/thumbnails/';

console.log(colors.green("\nThumbnail generator ") + version);

var Scraper = require('scraper-js');
var scraper = new Scraper.Scraper();


var fs = require('fs');
var toml = require('toml');

var download = require('download-file');

fs.readdir(input_folder, (err, files) => {
    if (err) {
        console.log(colors.red("Error getting files:"));
        console.log(err);
        return;
    } else {
        files.forEach(function(filename) {
            fs.readFile(input_folder + filename, 'utf-8', function(err, content) {
                if (err) {
                    console.log(colors.red("Error reading file:"));
                    console.log(err);
                    return;
                }
                
                try {
                    var file = toml.parse(content);
                    if (file.hasOwnProperty('link')) {
                        scraper.scrape(file.link).then(function (thumbs) {

                            var options = {
                                directory: output_folder,
                                filename: file.thumb_img + ".thm"
                            };

                            download(thumbs[0], options, function(err){
                                if (err) {
                                    console.log(colors.red("Error: could not download"));
                                    console.log(err);
                                }
                                console.log(colors.bold("Created: ") + options.filename + colors.bold(" For: ") + filename);

                            });

                        });
                    }
                } catch (e) {
                    console.error(colors.red("Error: Parsing error") + e.message);
                }
            });
        });
    }
});

