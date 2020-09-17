const YAML = require('yaml');
const tmp = require('tmp');
var fs = require('fs');
const getDefaultComposeContent = require('./defaultComposeContent');

function getRootComposeFile(args) {
    var compose = getDefaultComposeContent(args)
    const file = tmp.fileSync();
    fs.appendFileSync(file.name, YAML.stringify(compose));
    return file;
}

module.exports = getRootComposeFile;
