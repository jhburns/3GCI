var version = '0.0.3';

var removedDirectories =    ['public', 'themes/GCI/static/created', 'yarn-error.log', 'error.log', 'resources',
                            'themes/GCI/scr/img/thumbnails'
                            ];

try {
    const remove = require('rmdir');
    const colors = require('colors');

    console.log(colors.green("\nDirectory Remover ") + version);

    removedDirectories.forEach(function(element) {
        remove(element, function (err, dirs, files) {
            console.log("Deleting: " + colors.bold(element));
        });
    });

} catch (e) {
    console.log("\nHas already been run, cannot remove again");
    console.log("Run \"yarn install\" first\n");
}






