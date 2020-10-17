const YAML = require('yaml');
const getDefaultComposeContent = require('../docker/getRootComposeFile/defaultComposeContent');

/**
 * print - print the generated docker-compose file and exit
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function print(args) {
  const composeFileContent = getDefaultComposeContent(args);
  console.info(YAML.stringify(composeFileContent)); // eslint-disable-line no-console
}
module.exports = print;
