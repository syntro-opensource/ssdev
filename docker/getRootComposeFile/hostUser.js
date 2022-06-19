const os = require('os');
const process = require('process');
/**
 * hostUser - returns the user list for the host container
 *
 * @param  {object} args the arguments from the cli
 * @return {object}      the volume list with the 'user' key
 */
function hostUser(args) { // eslint-disable-line no-unused-vars
  const user = {};
  if (os.platform() !== 'darwin' && os.platform() !== 'win32') {
    user.user = 'root';
  }
  return user;
}

module.exports = hostUser;
