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
function getVolumeDefinition(args) {
    var definition = {
        db_data: null,
        host_data: {
            driver: 'local',
            driver_opts: {
                type: 'none',
                o: 'bind',
                device: "${PWD}"
            }
        }
    }
    if (os.platform() == 'darwin' || os.platform() == 'win32') {
        definition.host_data = {
            driver: 'local',
            driver_opts: {
                type: 'nfs',
                o: 'addr=host.docker.internal,rw,nolock,hard,nointr,nfsvers=3',
                device: ":${PWD}"
            }
        }
    }
    return { volumes: definition }
}

module.exports = getVolumeDefinition;
