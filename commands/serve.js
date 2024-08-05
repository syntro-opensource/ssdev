const { v2: compose } = require('docker-compose');
const withComposeConfig = require('../docker/withComposeConfig');

/**
 * serve - serves the current directory
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function serve(args) {
  withComposeConfig(args, (config) => compose.upOne('host', config));
}
module.exports = serve;
