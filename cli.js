#!/usr/bin/env node
const commands = require('./commands');

const DEFAULT_HOST_IMAGE = 'syntrocontainer/silverstripe-dev:7.4-apache-buster';
const DEFAULT_DB_IMAGE = 'mysql:8-oracle';

require('yargs') // eslint-disable-line
  .option('image-host', {
    alias: 'h',
    type: 'string',
    description: 'The image of the host container',
    default: DEFAULT_HOST_IMAGE,
  })
  .option('image-db', {
    alias: 'd',
    type: 'string',
    description: 'The image of the database container',
    default: DEFAULT_DB_IMAGE,
  })
  .option('tz', {
    type: 'string',
    description: 'The timezone of the host and db container',
    default: 'Europe/Zurich',
  })
  .option('ss-env-type', {
    type: 'string',
    description: 'The environment type, either "dev", "test" or "live"',
    default: 'dev',
  })
  .option('ports-host', {
    type: 'array',
    description: 'Ports to publish from the host container',
    default: ['80:80'],
  })
  .option('ports-db', {
    type: 'array',
    description: 'Ports to publish from the database container',
    default: ['3306:3306'],
  })
  .option('use-nfs', {
    type: 'boolean',
    description: 'flag to enable nfs mount on macOS or Windows systems',
    default: false,
  })
// Serve the devenv
  .command(
    'up',
    'start the devenv',
    (yargs) => {}, // eslint-disable-line no-unused-vars
    (argv) => {
      commands.serve(argv);
    },
  )
  .command(
    'serve',
    'start the devenv (same as up)',
    (yargs) => {}, // eslint-disable-line no-unused-vars
    (argv) => {
      commands.serve(argv);
    },
  )
// stop the devenv
  .command(
    'down',
    'stop the devenv',
    (yargs) => {
      yargs.option('volumes', {
        alias: 'v',
        describe: 'remove volumes',
        type: 'boolean',
      });
    }, (argv) => {
      commands.down(argv);
    },
  )
// pull in container
  .command(
    'pull',
    'pulls newest versions of all containers',
    (yargs) => {}, // eslint-disable-line no-unused-vars
    (argv) => {
      commands.pull(argv);
    },
  )
// build
  .command(
    'build',
    'build new versions of all containers which require build',
    (yargs) => {}, // eslint-disable-line no-unused-vars
    (argv) => {
      commands.build(argv);
    },
  )
// execute a command inside the host container
  .command(
    'run [container]',
    'run a command in the desired service container ("host" by default). Specify the command like so: "ssdev run -- composer require silverstripe/framework"',
    (yargs) => {
      yargs
        .positional('container', {
          describe: 'the service name to execute the command in',
          default: 'host',
          type: 'string',
        })
        .option('--', {
          describe: 'the command to run',
        })
        .demandOption('--', 'Please provide a command using "--"')
      // .array('command')
        .parserConfiguration({
        // 'unknown-options-as-args': true,
          'populate--': true,
        });
    },
    (argv) => {
      commands.run(argv);
    },
  )
  // execute a command inside the host container
  .command(
    'exec [container]',
    'exec a command in the desired service container ("host" by default). use like so: "ssdev exec composer -- require silverstripe/framework"',
    (yargs) => {
      yargs
        .positional('container', {
          describe: 'the service name to execute the command in',
          default: 'host',
          type: 'string',
        })
        .option('--', {
          describe: 'the command to run',
        })
        .demandOption('--', 'Please provide a command using "--"')
      // .array('command')
        .parserConfiguration({
        // 'unknown-options-as-args': true,
          'populate--': true,
        });
    },
    (argv) => {
      commands.exec(argv);
    },
  )
// Initialize a new project
  .command(
    'init <path>',
    'create a new project using a silverstripe recipe in a new directory',
    (yargs) => {
      yargs.option('recipe', {
        alias: 'r',
        describe: 'specify the recipe to be used',
        default: 'syntro/ssto:^2',
        type: 'string',
      }).option('container', {
        describe: 'specify the container to be used (must contain a composer installation)',
        default: DEFAULT_HOST_IMAGE,
        type: 'string',
      }).option('ignore-platform-reqs', {
        type: 'boolean',
        description: 'If set, the flag is added to the composer commant. Use of this flag is discouraged, use the composer "config.platform" key.',
      });
      yargs.positional('path', {
        describe: 'where to place the project',
        type: 'string',
      });
    },
    (argv) => {
      commands.init(argv);
    },
  )
// print the generated compose config
  .command(
    'print',
    'Print the generated docker-compose config for use in a file',
    (yargs) => {}, // eslint-disable-line no-unused-vars
    (argv) => {
      commands.print(argv);
    },
  )
  .strict(true)
  .help('help')
  .scriptName('ssdev')
  .epilogue('provided by Syntro GmbH (https://syntro.ch)')
  .demandCommand()
  .pkgConf('ssdev')
  .argv;
