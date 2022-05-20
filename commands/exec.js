// const compose = require('docker-compose');
const withComposeConfig = require('../docker/withComposeConfig');
const execComposeWithTTY = require('../docker/execComposeWithTTY');

/**
 * exec - execs a command in a container
 *
 * @param  {array} args the cli args
 * @return {void}
 */
function exec(args) {
  withComposeConfig(args, (config) => {
    const cmdArgs = [args.container].concat(args['--']);
    // console.log(config);
    // return compose.exec(args.container, args['--'], config);
    return execComposeWithTTY('exec', cmdArgs, config);
  });
}
module.exports = exec;
