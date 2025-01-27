/* eslint-disable */
const hostVolumes = require('./hostVolumes')
const os = require('os');
const process = require('process');

jest.mock('os');

// jest.mock('process');
// process.getuid.mockReturnValue(600);

const args = {};

test('contains a default volumes definition', () => {
  expect('volumes' in hostVolumes(args)).toBeTruthy();
  const volumes = hostVolumes(args).volumes;
  expect(volumes).toContainEqual('${PWD}:/var/www/html');
});

test('contains pwd on linux', () => {
  os.platform.mockReturnValue('linux');
  const volumes = hostVolumes(args).volumes;
  expect(volumes).toContain('/etc/passwd:/etc/passwd:ro');
});

test('does not contain pwd on windows or macOS', () => {
  os.platform.mockReturnValue('win32');
  var volumes = hostVolumes(args).volumes;
  expect(volumes).not.toContain('/etc/passwd:/etc/passwd:ro');

  os.platform.mockReturnValue('darwin');
  volumes = hostVolumes(args).volumes;
  expect(volumes).not.toContain('/etc/passwd:/etc/passwd:ro');
});
