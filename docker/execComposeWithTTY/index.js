const childProcess = require('child_process');
const configToArgs = require('./configToArgs');
const composeOptionsToArgs = require('./composeOptionsToArgs');

/**
 * execComposeWithTTY - execute a compose command while attaching
 * the host tty
 *
 * @param  {string} command the command to execute (most of the time you want 'exec' or 'run')
 * @param  {array}  args    args for the command
 * @param  {array}  options options for the command
 * @return {Promise}
 */
function execComposeWithTTY(command, args, options) {
  return new Promise((resolve, reject) => {
    const composeOptions = options.composeOptions || [];
    const commandOptions = options.commandOptions || [];
    let composeArgs = composeOptionsToArgs(composeOptions);
    const isConfigProvidedAsString = !!options.configAsString;

    const configArgs = isConfigProvidedAsString
      ? ['-f', '-']
      : configToArgs(options.config);

    composeArgs = composeArgs.concat(
      configArgs.concat(
        [command].concat(composeOptionsToArgs(commandOptions), args),
      ),
    );

    const { cwd } = options;
    const env = options.env || undefined;
    const executablePath = options.executablePath || 'docker';
    composeArgs = ['compose', ...composeArgs];
    const childProc = childProcess.spawn(executablePath, composeArgs, {
      cwd,
      env,
      stdio: 'inherit',
    });

    childProc.on('error', (err) => {
      reject(err);
    });
    childProc.on('exit', (exitCode) => {
      if (exitCode === 0) {
        resolve(exitCode);
      } else {
        reject(exitCode);
      }
    });
  });
}
module.exports = execComposeWithTTY;
