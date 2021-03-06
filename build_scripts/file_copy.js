//File Copier, needed for hugo data files
var version = '0.0.2';
var file_ext = '.toml';

const colors = require('colors');

const fs = require('fs-extra');

console.log(colors.green("\nFile Copier ") + version);

if (process.argv.length !== 5) {
    console.log(colors.red("Error: ") + "exactly three parameters needed:");
    console.log("\tnode file_copy.js " + colors.bold("[source_file] [destination_folder] [output_name]"));
} else {
    var input_file = process.argv[2];
    var output_folder = process.argv[3];
    var output_file = process.argv[4];
    var full_path = output_folder + output_file + file_ext;

    if (fs.existsSync(full_path)) {
        console.log(colors.yellow("Warning: ") + "file "  + colors.bold(full_path) + " already exists in output folder");
        console.log(colors.dim("File not created"));
    } else {
        fs.copy(input_file, full_path)
            .then(function () {
                console.log(colors.green("Success! ") + "file " + colors.bold(output_file + full_path) +
                    " was created in " + colors.bold(output_folder));
            })
            .catch(err => console.error(colors.red("Error: ") + err));
    }
}
