/* eslint-disable */
const volumeDefinition = require('./volumeDefinition')
const os = require('os');
const process = require('process');

jest.mock('os');
os.platform.mockReturnValue('linux');

// jest.mock('process');
// process.getuid.mockReturnValue(600);

const args = {};

test('contains a default volumes definition', () => {
  const definition = volumeDefinition(args).volumes;
  expect('db_data' in definition).toBeTruthy();
  expect(definition.db_data).toBeNull();

  // expect('host_data' in definition).toBeTruthy();
});

// test('contains a default mount for all systems by default', () => {
//   os.platform.mockReturnValue('linux');
//   const linuxDefinition = volumeDefinition(args).volumes.host_data;
//   expect(linuxDefinition.driver).toBe('local');
//   expect(linuxDefinition.driver_opts).toEqual({
//      type: 'none',
//      o: 'bind',
//      device: '${PWD}',
//    });

//    os.platform.mockReturnValue('win32');
//   const winDefinition = volumeDefinition(args).volumes.host_data;
//   expect(winDefinition.driver).toBe('local');
//   expect(winDefinition.driver_opts).toEqual({
//      type: 'none',
//      o: 'bind',
//      device: '${PWD}',
//    });

//    os.platform.mockReturnValue('darwin');
//   const darwinDefinition = volumeDefinition(args).volumes.host_data;
//   expect(darwinDefinition.driver).toBe('local');
//   expect(darwinDefinition.driver_opts).toEqual({
//      type: 'none',
//      o: 'bind',
//      device: '${PWD}',
//    });
// });

// test('correctly handles nfs on windows or macOS', () => {
//   os.platform.mockReturnValue('win32');
//   var definition = volumeDefinition({
//     'use-nfs': true,
//   }).volumes.host_data;
//   expect(definition.driver).toBe('local');
//   expect(definition.driver_opts).toEqual({
//      type: 'nfs',
//      o: 'addr=host.docker.internal,rw,nolock,hard,nointr,nfsvers=3',
//      device: ':${PWD}',
//    });

//   os.platform.mockReturnValue('darwin');
//   definition = volumeDefinition({
//     'use-nfs': true,
//   }).volumes.host_data;
//   expect(definition.driver).toBe('local');
//   expect(definition.driver_opts).toEqual({
//      type: 'nfs',
//      o: 'addr=host.docker.internal,rw,nolock,hard,nointr,nfsvers=3',
//      device: ':${PWD}',
//    });
// });
