/* eslint-disable */
const hostUser = require('./hostUser')
const os = require('os');
const process = require('process');

jest.mock('os');

// jest.mock('process');
// process.getuid.mockReturnValue(600);

const args = {};



test('contains user on linux', () => {
  os.platform.mockReturnValue('linux');
  expect('user' in hostUser(args)).toBeTruthy();
  const userVar = hostUser(args).user;
  expect(userVar).toBe(String(process.getuid()));
});

test('contains no user macOS and windows', () => {
  os.platform.mockReturnValue('darwin');
  expect('user' in hostUser(args)).toBeFalsy();

  os.platform.mockReturnValue('win32');
  expect('user' in hostUser(args)).toBeFalsy();
});
