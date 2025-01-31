const volumeDefinition = require('./volumeDefinition');
const hostVolumes = require('./hostVolumes');
// const hostUser = require('./hostUser');
const hostEnv = require('./hostEnv');

/**
 * This is the default definition of the compose file generated for hosting
 * a silverstripe devenv. The definitions can be overwritten later by setting
 * flags on the command
 */
module.exports = (args) => ({
  services: {
    host: {
      image: args['image-host'],
      ...hostEnv(args),
      // ...hostUser(args),
      ...hostVolumes(args),
      ports: args['ports-host'],
      depends_on: [
        'database',
      ],
    },
    database: {
      image: args['image-db'],
      environment: {
        MYSQL_ROOT_PASSWORD: 'silverstripe',
        MYSQL_DATABASE: 'ss_default',
        MYSQL_USER: 'silverstripe',
        MYSQL_PASSWORD: 'silverstripe',
        TZ: args.tz,
      },
      ports: args['ports-db'],
      volumes: [{
        type: 'volume',
        source: 'db_data',
        target: '/var/lib/mysql',
      }],
      command: [
        '--mysql-native-password=ON',
      ],
    },
  },
  ...volumeDefinition(args),
});
