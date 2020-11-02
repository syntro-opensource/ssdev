const compose = require('docker-compose');
const withComposeConfig = require('../docker/withComposeConfig');

/**
 * exec - execs a command in a container
 *
 * @param  {array} args the cli args
 * @return {void}
 */
function exec(args) {
  withComposeConfig(args, (config) => {
    return compose.exec(args.container, args['--'], config)
  });
}
module.exports = exec;
