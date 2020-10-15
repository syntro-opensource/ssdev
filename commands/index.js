const compose = require('docker-compose');
const tmp = require('tmp');
const withComposeConfig = require('../docker/withComposeConfig');
const YAML = require('yaml');
const getDefaultComposeContent = require('../docker/getRootComposeFile/defaultComposeContent');
const init = require('./init');


module.exports = {
    /**
     * Serves the development environment.
     */
    serve: (args) => {
        withComposeConfig(args, (config) => {
            return compose.upOne('host', config);
        })
    },
    /**
     * stops and removes all containers
     */
    down: async (args) => {
        withComposeConfig(args, (config) => {
            if (args.volumes) {
                var commandOptions = config.commandOptions || [];
                commandOptions.push('--volumes');
                config.commandOptions = commandOptions;
            }
            return compose.down(config);
        });
    },
    pull: (args) => {
        withComposeConfig(args, (config) => {
            return compose.pullAll(config);
        });
    },
    run: (args) => {
        withComposeConfig(args, (config) => {
            return compose.run(args.container, args['--'], config);
        });
    },
    print: (args) => {
        var compose = getDefaultComposeContent(args)
        console.info(YAML.stringify(compose));
    },
    /**
     * initializes a new project using composer
     */
    init: init,
}
