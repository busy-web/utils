import { module, test } from 'qunit';
import { Browser as browserInfo } from '@busy-web/utils';

module('Unit | Utility | browser info');

// Replace this with your real tests.
test('it works', function(assert) {
	// class and all static functions exist.
  assert.ok(browserInfo);
  assert.ok(browserInfo.type);
  assert.ok(browserInfo.version);
  assert.ok(browserInfo.osType);
  assert.ok(browserInfo.osVersion);
  assert.ok(browserInfo.detect);
  assert.ok(browserInfo.isBrowserType);
});

test('method::type', function(assert) {
	// test to see if the browser gets returned.
	const typesArray = ["Chrome", "Firefox", "Safari", "Internet Explorer", "Opera"];
	assert.ok(typesArray.indexOf(browserInfo.type()) !== -1, 'type returns a browser type');

	// test that type cannot take any arguments
	//assert.throws(() => browserInfo.type('fail'), /arguments must be equal to 0/, 'must not take any args');
});

test('method::osType', function(assert) {
	// test to see if the browser gets returned.
	const typesArray = ["MacOS", "Linux", "Windows", "UNIX"];
	assert.ok(typesArray.indexOf(browserInfo.osType()) !== -1, 'type returns a browser type');

	// test that osType cannot take any arguments
	//assert.throws(() => browserInfo.osType('fail'), /arguments must be equal to 0/, 'must not take any args');
});

test('method::version', function(assert) {
	const version = browserInfo.version();

	assert.ok(typeof version === 'string', 'version returns a string');
	assert.ok(!window.isNaN(window.parseInt(version, 10)) && !window.isNaN(window.parseFloat(version)), 'version returns a valid version number');

	// test that version cannot take any arguments
	//assert.throws(() => browserInfo.version('fail'), /arguments must be equal to 0/, 'must not take any args');
});

test('method::osVersion', function(assert) {
	const version = browserInfo.osVersion();

	assert.ok(typeof version === 'string', 'version returns a string');
	//assert.ok(!window.isNaN(window.parseInt(version, 10)) && !window.isNaN(window.parseFloat(version)), 'version returns a valid version number');

	// test that osVersion cannot take any arguments
	//assert.throws(() => browserInfo.osVersion('fail'), /arguments must be equal to 0/, 'must not take any args');
});

