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

  expect('host_data' in definition).toBeTruthy();
});

test('contains a default mount for linux system', () => {
  os.platform.mockReturnValue('linux');
  const definition = volumeDefinition(args).volumes.host_data;
  expect(definition.driver).toBe('local');
  expect(definition.driver_opts).toEqual({
     type: 'none',
     o: 'bind',
     device: '${PWD}',
   });
});

test('does not contain pwd on windows or macOS', () => {
  os.platform.mockReturnValue('win32');
  var definition = volumeDefinition(args).volumes.host_data;
  expect(definition.driver).toBe('local');
  expect(definition.driver_opts).toEqual({
     type: 'nfs',
     o: 'addr=host.docker.internal,rw,nolock,hard,nointr,nfsvers=3',
     device: ':${PWD}',
   });

  os.platform.mockReturnValue('darwin');
  definition = volumeDefinition(args).volumes.host_data;
  expect(definition.driver).toBe('local');
  expect(definition.driver_opts).toEqual({
     type: 'nfs',
     o: 'addr=host.docker.internal,rw,nolock,hard,nointr,nfsvers=3',
     device: ':${PWD}',
   });
});
