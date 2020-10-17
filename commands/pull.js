const compose = require('docker-compose');
const withComposeConfig = require('../docker/withComposeConfig');

/**
 * pull - pulls the required containers in the current directory
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function pull(args) {
  withComposeConfig(args, (config) => compose.pullAll(config));
}
module.exports = pull;
