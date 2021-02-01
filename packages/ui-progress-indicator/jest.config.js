const config = require('@uxland/project-tools/test/jest.config.js');
const pack = require('./package');

module.exports = {
  ...config,
  setupFilesAfterEnv: ['../../node_modules/@uxland/project-tools/test/setup.ts'],
  name: pack.name,
  displayName: pack.name,
};
