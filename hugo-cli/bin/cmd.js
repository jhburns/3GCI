#!/usr/bin/env node

var spawn = require('child_process').spawn;

var cli = require('../');

var HUGO_DEFAULT_VERSION = process.env.HUGO_VERSION || '0.37.1';
var CONFIG_FILE = 'hugo-version.json';


var args = process.argv;

if (/node(\.exe)?$|iojs$|nodejs$/.test(args[0])) {
  args = args.slice(2);
}

var options = {
  verbose: args.find((a) => /-([^\s]*v[^\s]*|-verbose)/.test(a))
};

var config;
var version;

var fs = require('fs');
if (fs.existsSync(CONFIG_FILE)) {
    config = fs.readFileSync(CONFIG_FILE);
    config = JSON.parse(config);


    if (config.hasOwnProperty('hugo')) {
        version = config.hugo;
    } else {
        console.log("Property 'hugo' not found: check hugo-version.json");
        console.log("Make sure file follows pattern: { \"hugo\":\"0.40.1\" }");
        console.log("Setting defualt: 0.37.1");

        console.log();
        version = HUGO_DEFAULT_VERSION;
    }

    if (config.hasOwnProperty("source_location")) {
        args.push('-s');
        args.push(config.source_location);
    }

} else {
    console.log("File not found: check that hugo-version.json exists in root directory");
    console.log("Setting defualt: 0.37.1");
    console.log();

    version = HUGO_DEFAULT_VERSION;
}

cli.withHugo(options, version, function(err, hugoPath) {

  if (err) {
    console.error('failed to grab hugo :-(');
    console.error(err);

    process.exit(1);
  }

  spawn(hugoPath, args, { stdio: 'inherit' });
});
