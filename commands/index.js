const compose = require('docker-compose');
const YAML = require('yaml');
const withComposeConfig = require('../docker/withComposeConfig');
const getDefaultComposeContent = require('../docker/getRootComposeFile/defaultComposeContent');
const init = require('./init');

module.exports = {
  /**
     * Serves the development environment.
     */
  serve: (args) => {
    withComposeConfig(args, (config) => compose.upOne('host', config));
  },
  /**
     * stops and removes all containers
     */
  down: async (args) => {
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
  },
  pull: (args) => {
    withComposeConfig(args, (config) => compose.pullAll(config));
  },
  run: (args) => {
    withComposeConfig(args, (config) => compose.run(args.container, args['--'], config));
  },
  print: (args) => {
    const composeFileContent = getDefaultComposeContent(args);
    console.info(YAML.stringify(composeFileContent)); // eslint-disable-line no-console
  },
  /**
     * initializes a new project using composer
     */
  init,
};
