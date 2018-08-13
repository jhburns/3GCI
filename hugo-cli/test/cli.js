var cli = require('../');
var assert = require('assert');
var util = require('util');


describe('getDetails', function() {

  function verify(version, env, expectedDetails) {

    it('hugo@' + version + ', env=' + util.inspect(env), function() {

      // when
      var actualDetails = cli.getDetails(version, env);

      // then
      assert.deepEqual(actualDetails, expectedDetails);
    });

  }


  verify('0.37.1', { platform: 'linux', arch: 'x64' }, {
    archiveName: 'hugo_0.37.1_Linux-64bit.tar.gz',
    downloadLink: 'https://github.com/gohugoio/hugo/releases/download/v0.37.1/hugo_0.37.1_Linux-64bit.tar.gz',
    executableExtension: '',
    executableName: 'hugo_0.37.1_linux_amd64'
  });


  verify('0.37.1', { platform: 'darwin', arch: 'x64' }, {
    archiveName: 'hugo_0.37.1_macOS-64bit.tar.gz',
    downloadLink: 'https://github.com/gohugoio/hugo/releases/download/v0.37.1/hugo_0.37.1_macOS-64bit.tar.gz',
    executableExtension: '',
    executableName: 'hugo_0.37.1_darwin_amd64'
  });


  verify('0.37.1', { platform: 'win32', arch: 'x64' }, {
    archiveName: 'hugo_0.37.1_Windows-64bit.zip',
    downloadLink: 'https://github.com/gohugoio/hugo/releases/download/v0.37.1/hugo_0.37.1_Windows-64bit.zip',
    executableExtension: '.exe',
    executableName: 'hugo_0.37.1_windows_amd64.exe'
  });


  verify('0.37.1', { platform: 'win32', arch: 'x32' }, {
    archiveName: 'hugo_0.37.1_Windows-32bit.zip',
    downloadLink: 'https://github.com/gohugoio/hugo/releases/download/v0.37.1/hugo_0.37.1_Windows-32bit.zip',
    executableExtension: '.exe',
    executableName: 'hugo_0.37.1_windows_386.exe'
  });

});
