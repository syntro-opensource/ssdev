const withComposeConfig = require('../docker/withComposeConfig');
const execComposeWithTTY = require('../docker/execComposeWithTTY');

/**
 * run - runs a command in a container
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function run(args) {
  withComposeConfig(args, (config) => {
    config.commandOptions.push('--rm');
    const cmdArgs = [args.container].concat(args['--']);
    return execComposeWithTTY('run', cmdArgs, config);
  });
}
module.exports = run;
