const getRootComposeFile = require('./getRootComposeFile');
const getComposeConfig = require('./getComposeConfig');

/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback commandCallback
 * @param {Object} config
 */

/**
 * withComposeConfig - executes the callback with a generated config
 * for docker compose.
 *
 * The config is created specifically for the users operating system
 * with specific volume and permission definitions and can be used in
 * any docker-compose call. After executing the callback, the generated
 * compose configuration is cleaned up
 *
 * @param  {Object}          args     the args supplied to the command
 * @param  {commandCallback} callback the function executed with the generated config
 */
async function withComposeConfig(args, callback) {
  const rootComposeFile = getRootComposeFile(args);
  const config = getComposeConfig(args, rootComposeFile);
  await callback(config).catch((error) => {
    // console.log(error); // eslint-disable-line no-console
    // console.log('\nThere was an error. You can find more information in the output above \n'); // eslint-disable-line no-console
  });
  rootComposeFile.removeCallback();
}

module.exports = withComposeConfig;
