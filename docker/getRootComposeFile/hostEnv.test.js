/* eslint-disable */
const hostEnv = require('./hostEnv')
const os = require('os');

jest.mock('os');
os.userInfo.mockReturnValue({username: 'ubuntu'});
os.platform.mockReturnValue('linux');

const args = {
  'ss-env-type': 'live',
  'tz': 'Europe/Berlin'
};


test('contains environment definition', () => {
  expect('environment' in hostEnv(args)).toBeTruthy();
});


test('contains username', () => {
  const envVars = hostEnv(args).environment;
  expect('SS_DEFAULT_ADMIN_USERNAME' in envVars).toBeTruthy();
});

test('contains password', () => {
  const envVars = hostEnv(args).environment;
  expect('SS_DEFAULT_ADMIN_PASSWORD' in envVars).toBeTruthy();
});

test('contains database server', () => {
  const envVars = hostEnv(args).environment;
  expect('SS_DATABASE_SERVER' in envVars).toBeTruthy();
});

test('contains database server', () => {
  const envVars = hostEnv(args).environment;
  expect('SS_DATABASE_SERVER' in envVars).toBeTruthy();
});

test('contains database name', () => {
  const envVars = hostEnv(args).environment;
  expect('SS_DATABASE_NAME' in envVars).toBeTruthy();
});

test('contains database username', () => {
  const envVars = hostEnv(args).environment;
  expect('SS_DATABASE_USERNAME' in envVars).toBeTruthy();
});

test('contains database password', () => {
  const envVars = hostEnv(args).environment;
  expect('SS_DATABASE_PASSWORD' in envVars).toBeTruthy();
});

test('contains environment type', () => {
  var envVars = hostEnv(args).environment;
  expect('SS_ENVIRONMENT_TYPE' in envVars).toBeTruthy();
  expect(envVars.SS_ENVIRONMENT_TYPE).toBe('live');
});

test('contains timezone', () => {
  const envVars = hostEnv(args).environment;
  expect('TZ' in envVars).toBeTruthy();
  expect(envVars.TZ).toBe('Europe/Berlin');
});

test('contains apache user on linux', () => {
  os.platform.mockReturnValue('linux');
  const envVars = hostEnv(args).environment;
  expect('APACHE_RUN_USER' in envVars).toBeTruthy();
  expect(envVars['APACHE_RUN_USER']).toBe('ubuntu');
});

test('contains no apache user macOS and windows', () => {
  os.platform.mockReturnValue('darwin');
  var envVars = hostEnv(args).environment;
  expect('APACHE_RUN_USER' in envVars).toBeFalsy();

  os.platform.mockReturnValue('win32');
  envVars = hostEnv(args).environment;
  expect('APACHE_RUN_USER' in envVars).toBeFalsy();
});
