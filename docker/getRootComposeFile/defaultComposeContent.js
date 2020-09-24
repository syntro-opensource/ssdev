const os = require('os');


/**
 * This is the default definition of the compose file generated for hosting
 * a silverstripe devenv. The definitions can be overwritten later by setting
 * flags on the command
 */
module.exports = (args) => {
    return {
        version: "3.7",
        services: {
            host: {
                image: args['image-host'],
                // user: "${USER}:${USER}",
                environment: {
                    "SS_DEFAULT_ADMIN_USERNAME": "admin",
                    "SS_DEFAULT_ADMIN_PASSWORD": "admin",
                    "SS_DATABASE_SERVER": "database",
                    "SS_DATABASE_NAME": "ss_default",
                    "SS_DATABASE_USERNAME": "root",
                    "SS_DATABASE_PASSWORD": "silverstripe",
                    "SS_ENVIRONMENT_TYPE": args['ss-env-type'],
                    "TZ": args['tz']
                },
                volumes: [{
                    "type": "volume",
                    "source": "host_data",
                    "target": "/var/www/html"
                }],
                ports: args['ports-host'],
                depends_on: [
                    "database"
                ]
            },
            database: {
                image: args['image-db'],
                environment: {
                    "MYSQL_ROOT_PASSWORD": "silverstripe",
                    "MYSQL_DATABASE": "ss_default",
                    "MYSQL_USER": "silverstripe",
                    "MYSQL_PASSWORD": "silverstripe",
                    "TZ": args['tz']
                },
                ports: args['ports-db'],
                volumes: [{
                    "type": "volume",
                    "source": "db_data",
                    "target": "/var/lib/mysql"
                }],
                command: [
                    "--default-authentication-plugin=mysql_native_password"
                ]
            },
            composer: {
                image: 'composer',
                // restart: 'no',
                working_dir: '/var/www/html',
                // user: "${USER}:${USER}",
                volumes: [{
                    "type": "volume",
                    "source": "host_data",
                    "target": "/var/www/html"
                }]
            }
        },
        volumes: getVolumeDefinition(args)
    }
}


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
    return definition
}
