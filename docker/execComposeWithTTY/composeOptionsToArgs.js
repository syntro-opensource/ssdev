/**
 * composeOptionsToArgs - Taken from https://github.com/PDMLab/docker-compose/blob/05ba0fa5a838675ce9755d3559a55910b5e4dbae/src/index.ts#L140
 * Converts docker-compose commandline options to cli arguments
 *
 * @param  {array} composeOptions description
 * @return {array}
 */
function composeOptionsToArgs(composeOptions) {
  let composeArgs = [];

  composeOptions.forEach((option) => {
    if (option instanceof Array) {
      composeArgs = composeArgs.concat(option);
    }
    if (typeof option === 'string') {
      composeArgs = composeArgs.concat([option]);
    }
  });
  return composeArgs;
}
module.exports = composeOptionsToArgs;
