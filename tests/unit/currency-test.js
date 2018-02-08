import { isNone } from '@ember/utils';
import { isArray } from '@ember/array';
import { module, test } from 'qunit';
import { Currency } from '@busy-web/utils';

module('Unit | Utility | Currency');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(Currency);
  assert.ok(Currency.codes);
  assert.ok(Currency.code);
  assert.ok(Currency.country);
  assert.ok(Currency.number);
  assert.ok(Currency.countries);
});

test('codes', function(assert) {
	const codes = Currency.codes();

  assert.ok(isArray(codes), 'codes() returns an array');
});

test('code', function(assert) {
	const code = Currency.code('USD');

  assert.ok(!isNone(code) && typeof code === 'object', 'code returns an object');
	assert.ok(!isNone(code) && code.get('symbol') === '$', 'code returns object with symbol');
});

test('country', function(assert) {
	const country = Currency.country('USD');

  assert.ok(isArray(country), 'country returns a list of countries');
});

test('number', function(assert) {
	const code = Currency.number(840);

  assert.ok(!isNone(code) && typeof code === 'object', 'code returns an object');
	assert.ok(!isNone(code) && code.get('symbol') === '$', 'code returns object with symbol');
});

test('countries', function(assert) {
	const countries = Currency.countries();

  assert.ok(isArray(countries), 'countries returns a list of all countries');
});
