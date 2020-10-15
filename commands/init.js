const os = require('os');
const { execSync } = require("child_process");

/**
 * init - initializes a new repository
 *
 * @param  {type} args the cli args
 * @return {void}
 */
function init(args) {
    var command = [
        'docker',
        'run',
        '--rm',
        '-t',
        '-v $PWD:/app'
    ];
    if (os.platform() != 'darwin' && os.platform() != 'win32') {
        command = [
            ...command,
            '-u $(id -u ${USER}):$(id -g ${USER})'
        ];
    }
    command = [
        ...command,
        'composer',
        'create-project',
        '--ignore-platform-reqs --no-interaction',
        args['recipe'],
        args['path']
    ];
    execSync(command.join(' '),{ stdio: 'inherit' });
}
module.exports = init;
