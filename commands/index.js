const compose = require('docker-compose');
const tmp = require('tmp');
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
        const commandOptions = config.commandOptions || [];
        commandOptions.push('--volumes');
        config.commandOptions = commandOptions;
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
    const compose = getDefaultComposeContent(args);
    console.info(YAML.stringify(compose));
  },
  /**
     * initializes a new project using composer
     */
  init,
};
