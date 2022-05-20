/**
 * configToArgs - Taken from https://github.com/PDMLab/docker-compose/blob/05ba0fa5a838675ce9755d3559a55910b5e4dbae/src/index.ts#L123
 * Converts supplied yml files to cli arguments
 * https://docs.docker.com/compose/reference/overview/#use--f-to-specify-name-and-path-of-one-or-more-compose-files
 *
 * @param  {array|string} config the config
 * @return {array}
 */
function configToArgs(config) {
  if (typeof config === 'undefined') {
    return [];
  } if (typeof config === 'string') {
    return ['-f', config];
  } if (config instanceof Array) {
    return config.reduce(
      (args, item) => args.concat(['-f', item]),
      [],
    );
  }
  throw new Error(`Invalid argument supplied: ${config}`);
}
module.exports = configToArgs;
