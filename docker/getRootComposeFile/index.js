const YAML = require('yaml');
const tmp = require('tmp');
const fs = require('fs');
const getDefaultComposeContent = require('./defaultComposeContent');

function getRootComposeFile(args) {
  const compose = getDefaultComposeContent(args);
  const file = tmp.fileSync();
  fs.appendFileSync(file.name, YAML.stringify(compose));
  return file;
}

module.exports = getRootComposeFile;
