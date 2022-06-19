const os = require('os');
/**
 * hostEnv - returns the environment for the host container
 *
 * @param  {object} args the arguments from the cli
 * @return {object}      the volume list with the 'environment' key
 */
function hostEnv(args) {
  const env = {
    environment: {
      SS_DEFAULT_ADMIN_USERNAME: 'admin',
      SS_DEFAULT_ADMIN_PASSWORD: 'admin',
      SS_DATABASE_SERVER: 'database',
      SS_DATABASE_NAME: 'ss_default',
      SS_DATABASE_USERNAME: 'root',
      SS_DATABASE_PASSWORD: 'silverstripe',
      SS_ENVIRONMENT_TYPE: args['ss-env-type'],
      TZ: args.tz,
    },
  };
  if (os.platform() !== 'darwin' && os.platform() !== 'win32') {
    env.environment = {
      ...env.environment,
      APACHE_RUN_USER: 'root',
    };
  }
  return env;
}

module.exports = hostEnv;
