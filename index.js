/**
 * https://github.com/bjrmatos/electron-html-to/issues/459
 * 
 * There is a compatability issue witht the newest versions.
 * 
 * Make sure to use:
 * "electron": "^5.0.12",
 * "electron-html-to": "^2.6.0".
 * 
 */

const fs = require('fs'),
    convertFactory = require('electron-html-to');
 
const conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});
 
conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
  if (err) {
    return console.error(err);
  }
 
  console.log(result.numberOfPages);
  console.log(result.logs);
  result.stream.pipe(fs.createWriteStream('./index.pdf'));
  conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
});