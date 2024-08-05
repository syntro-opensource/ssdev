const { v2: compose } = require('docker-compose');
const withComposeConfig = require('../docker/withComposeConfig');

/**
 * down - stops the currently running env in the pwd
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function down(args) {
  withComposeConfig(args, (config) => {
    if (args.volumes) {
      return compose.down({
        ...config,
        commandOptions: [
          ...config.commandOptions,
          '--volumes',
        ],
      });
    }
    return compose.down(config);
  });
}
module.exports = down;
