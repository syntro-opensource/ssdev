const os = require('os');
const { execSync } = require('child_process');

/**
 * init - initializes a new repository
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function init(args) {
  let command = [
    'docker',
    'run',
    '--rm',
    '-t',
    '--workdir /app',
    '-v $PWD:/app',
  ];
  if (os.platform() !== 'darwin' && os.platform() !== 'win32') {
    command = [
      ...command,
      '-u $(id -u ${USER}):$(id -g ${USER})', // eslint-disable-line no-template-curly-in-string
    ];
  }
  command = [
    ...command,
    args.container,
    'composer',
    'create-project',
    '--stability=dev',
    '--no-interaction',
  ];
  if (args['ignore-platform-reqs']) {
    command = [
      ...command,
      '--ignore-platform-reqs',
    ];
  }
  command = [
    ...command,
    args.recipe,
    args.path,
  ];
  try {
    execSync(command.join(' '), { stdio: 'inherit' });
  } catch (e) {
    console.log('');
  }

}
module.exports = init;
