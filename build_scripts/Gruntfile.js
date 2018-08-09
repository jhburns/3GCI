// See source https://gist.github.com/sebz/efddfc8fdcb6b480f567
//Changes pointed out

var toml = require("toml");
var S = require("string");

var CONTENT_PATH_PREFIX = "../content";

module.exports = function(grunt) {

    grunt.registerTask("lunr-index", function() {

        grunt.log.writeln("Build pages index");

        var indexPages = function() {
            var pagesIndex = [];
            grunt.file.recurse(CONTENT_PATH_PREFIX, function(abspath, rootdir, subdir, filename) {
                grunt.verbose.writeln("Parse file:",abspath);
                pagesIndex.push(processFile(abspath, filename));
            });

            return pagesIndex;
        };

        var processFile = function(abspath, filename) {
            var pageIndex;

            if (S(filename).endsWith(".html")) {
                pageIndex = processHTMLFile(abspath, filename);
            } else {
                pageIndex = processMDFile(abspath, filename);
            }

            return pageIndex;
        };

        var processHTMLFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageName = S(filename).chompRight(".html").s;
            var href = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                href: href,
                content: S(content).trim().stripTags().stripPunctuation().s
            };
        };

        var processMDFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageIndex;
            // First separate the Front Matter from the content and parse it
            content = content.split("+++");
            var frontMatter;
            try {
                frontMatter = toml.parse(content[1].trim());
            } catch (e) {
                console.log(e.message);
            }

            //Changed to only get relative dir
            var href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
            // href for index.md files stops at the folder name
            if (filename === "index.md") {
                href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
            }

            // Build Lunr index for this page
            // Changed to read in slug too
            //Needs the '/' to read in the (current) hugo function into the navbar
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                description: frontMatter.description,
                href: href + frontMatter.slug + '/',
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };

            return pageIndex;
        };

        grunt.file.write("../themes/GCI/static/created/js/jason/PagesIndex.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built");
    });
};