import { module, test } from 'qunit';
import { LocalStorage } from '@busy-web/utils';

module('Unit | Utility | LocalStorage');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(LocalStorage);
  assert.ok(LocalStorage.setProperty);
  assert.ok(LocalStorage.getProperty);
  assert.ok(LocalStorage.getWithDefault);
  assert.ok(LocalStorage.hasValue);
  assert.ok(LocalStorage.remove);
});

test('getWithDefault', function(assert) {
	const defaultValue = 'test';
	const value = 'test-gwd';

	// get a value that doesnt exist and make sure we got the defautl value.
  assert.ok(LocalStorage.getWithDefault('ls-test-gwd', defaultValue) === defaultValue, 'Get default value returns default');

	LocalStorage.setProperty('ls-test-gwd', value);

	// get a value that doesnt exist and make sure we got the defautl value.
  assert.ok(LocalStorage.getWithDefault('ls-test-gwd', defaultValue) === value, 'Get default value returns value');
});

test('getProperty', function(assert) {
	const value = 'test-gp';

	// get a value that doesnt exist and make sure we got the defautl value.
  assert.ok(LocalStorage.getProperty('ls-test-gp') === null, 'Get property value returns null if not exists');

	LocalStorage.setProperty('ls-test-gp', value);

  assert.ok(LocalStorage.getProperty('ls-test-gp') === value, 'Get property value returns null if not exists');
});

test('hasValue', function(assert) {
	const value = 'test-hv';

	// get a value that doesnt exist and make sure we got the defautl value.
  assert.ok(LocalStorage.hasValue('ls-test-hv') === false, 'hasValue returns false when no value set');

	LocalStorage.setProperty('ls-test-hv', value);

  assert.ok(LocalStorage.hasValue('ls-test-hv') === true, 'hasValue returns true when value set');
});

test('remove', function(assert) {
	if (LocalStorage.hasValue('ls-test-gwd')) {
		LocalStorage.remove('ls-test-gwd');
		assert.ok(LocalStorage.hasValue('ls-test-gwd') === false, 'removed value for ls-test-gwd');
	}

	if (LocalStorage.hasValue('ls-test-gp')) {
		LocalStorage.remove('ls-test-gp');
		assert.ok(LocalStorage.hasValue('ls-test-gp') === false, 'removed value for ls-test-gp');
	}

	if (LocalStorage.hasValue('ls-test-hv')) {
		LocalStorage.remove('ls-test-hv');
		assert.ok(LocalStorage.hasValue('ls-test-hv') === false, 'removed value for ls-test-hv');
	}

	LocalStorage.setProperty('ls-test-rm', 10);
	LocalStorage.remove('ls-test-rm');
	assert.ok(LocalStorage.hasValue('ls-test-rm') === false, 'removed value for ls-test-rm');
});
