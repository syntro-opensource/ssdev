const os = require('os');

/**
 * hostVolumes - returns the volume list for the host container
 * These can differ, as for linux systems, we share the '/etc/passwd' file
 *
 * @param  {object} args the arguments from the cli
 * @return {object}      the volume list with the 'volumes' key
 */
function hostVolumes(args) { // eslint-disable-line no-unused-vars
  const volumes = {
    volumes: [{
      type: 'volume',
      source: 'host_data',
      target: '/var/www/html',
    }],
  };
  // if (os.platform() !== 'darwin' && os.platform() !== 'win32') {
  //   volumes.volumes = [
  //     ...volumes.volumes,
  //     '/etc/passwd:/etc/passwd:ro',
  //   ];
  // }
  return volumes;
}

module.exports = hostVolumes;
