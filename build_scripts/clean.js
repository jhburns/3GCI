//Basically final version, now also reads in config file 
var version = '1.0.0';

var remove_config = process.argv[2];
var fs = require('fs');
var toml = require('toml');

const remove = require('rmdir');
const colors = require('colors');

fs.readFile(remove_config, 'utf8', function (err, data) {
    if (err) throw err;

    var file = toml.parse(data);
    if (file.hasOwnProperty('removedDirectories')) {
        try {
            console.log(colors.green("\nDirectory Remover ") + version);

            file.removedDirectories.forEach(function (element) {
                remove(element, function (err, dirs, files) {
                    console.log("Deleting: " + colors.bold(element));
                });
            });

        } catch (e) {
            console.log(colors.red("\nError removing"));
            console.log(e.message);
        }
    } else {
        console.log(colors.red("Error reading file: does not contain property: ") + colors.bold('removedDirectories'));
    }
});






