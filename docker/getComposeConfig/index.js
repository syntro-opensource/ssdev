const fs = require('fs')
var path = require('path');
var process = require('process');

/**
 * getComposeConfig - returns a config for the docker-compose call
 * by the 'docker-compose' module.
 *
 * @param  {Object} args            the args from the CLI
 * @param  {Object} rootComposeFile the file
 * @return {Object}                 description
 */
function getComposeConfig(args, rootComposeFile) {
    var options = {
        cwd: path.join(process.cwd()),
        log: true,
        config: [
            rootComposeFile.name
        ],
        composeOptions: [
            ['--project-directory',path.join(process.cwd())]
        ]
    };
    if (fs.existsSync(path.join(process.cwd(),'docker-compose.yml'))) {
        options.config.push(path.join(process.cwd(),'docker-compose.yml'))
    }
    return options;
}

module.exports = getComposeConfig;
