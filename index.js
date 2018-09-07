/* eslint-env node */
'use strict';

const commands = require('./lib/commands');

module.exports = {
  name: '@busy-web/utils',

	includedCommands() {
		return commands;
	},

	isDevelopingAddon() {
		return true;
	}
};
