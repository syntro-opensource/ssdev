// const os = require('os');

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
  };
  return { volumes: definition };
}

module.exports = getVolumeDefinition;
