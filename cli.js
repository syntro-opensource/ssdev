#!/usr/bin/env node

require('yargs') // eslint-disable-line
    // .command('serve [port]', 'start the server', (yargs) => {
    //   yargs
    //     .positional('port', {
    //       describe: 'port to bind on',
    //       default: 5000
    //     })
    // }, (argv) => {
    //   if (argv.verbose) console.info(`start server on :${argv.port}`)
    //   serve(argv.port)
    // })

    // Serve the devenv
    .command('serve', 'start the devenv', (yargs) => {

    }, (argv) => {
        if (argv.verbose) console.info(`starting devenv`)
    })
    // stop the devenv
    .command('stop', 'stop the devenv', (yargs) => {

    }, (argv) => {
        if (argv.verbose) console.info(`stopping the devenv`)
    })
    // init a new env (provides default compose files)
    .command('init', 'init a devenv', (yargs) => {

    }, (argv) => {
        if (argv.verbose) console.info(`initializing devenv`)
    })
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
        description: 'Run with verbose logging'
    })
    .argv
