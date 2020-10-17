const compose = require('docker-compose');
const withComposeConfig = require('../docker/withComposeConfig');

/**
 * run - runs a command in a container
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function run(args) {
  withComposeConfig(args, (config) => compose.run(args.container, args['--'], config));
}
module.exports = run;
