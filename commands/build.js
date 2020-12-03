const compose = require('docker-compose');
const withComposeConfig = require('../docker/withComposeConfig');

/**
 * build - builds the required containers in the current directory
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function build(args) {
  withComposeConfig(args, (config) => compose.buildAll(config));
}
module.exports = build;
