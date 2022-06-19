const os = require('os');

/**
 * getVolumeDefinition - returns the volume definition as needed in the
 * 'volumes' key in the docker-compose definition.
 *
 * the host volume is
 *
 * @param  {type} args description
 * @return {type}      description
 */
function getVolumeDefinition(args) { // eslint-disable-line no-unused-vars
  const definition = {
    db_data: null,
    host_data: {
      driver: 'local',
      driver_opts: {
        type: 'none',
        o: 'bind',
        device: '${PWD}', // eslint-disable-line no-template-curly-in-string
      },
    },
  };
  // if (os.platform() === 'darwin' || os.platform() === 'win32') {
    definition.host_data = {
      driver: 'local',
      driver_opts: {
        type: 'nfs',
        o: 'addr=host.docker.internal,rw,nolock,hard,nointr,nfsvers=3',
        device: ':${PWD}', // eslint-disable-line no-template-curly-in-string
      },
    };
  // }
  return { volumes: definition };
}

module.exports = getVolumeDefinition;
