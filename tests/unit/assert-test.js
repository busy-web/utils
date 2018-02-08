import { module, test } from 'qunit';
import moment from 'moment';
import { Assert as assertTools, UUID } from '@busy-web/utils';

module('Unit | Utility | Assert');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(assertTools);
  assert.ok(assertTools.funcNumArgs);
  assert.ok(assertTools.isString);
  assert.ok(assertTools.isArray);
  assert.ok(assertTools.isNumber);
  assert.ok(assertTools.isInteger);
  assert.ok(assertTools.isBoolean);
  assert.ok(assertTools.isObject);
  assert.ok(assertTools.isMoment);
  assert.ok(assertTools.isUUID);
  assert.ok(assertTools.test);
  assert.ok(assertTools.throw);
});

test('method::funcNumArgs', function(assert) {
	// test valid assertions
	assert.ok(assertTools.funcNumArgs([1], 1, true), 'test no assertion with 1 arg and asserting 1 arg only');
	assert.ok(assertTools.funcNumArgs([1], 2), 'test no assertion with 1 arg and asserting less than or equal to 2 args');

	//test invalid assertions
	assert.throws(() => assertTools.funcNumArgs([1, 2], 1, true), /equal to 1/, 'test more args passed than allowed when equal');
	assert.throws(() => assertTools.funcNumArgs([1, 2], 1), /equal to 1/, 'test more args passed than allowed when less than');

	assert.throws(() => assertTools.funcNumArgs([1], 2, true), /equal to 2/, 'test less args passed than allowed when equal');
});

test('method::isString', function(assert) {
	// test valid assertions
	assert.ok(assertTools.isString('test'), 'test a valid input passed in');

	// test invalid assertions
	assert.throws(() => assertTools.isString(12), /expected a string/, 'test an invalid input passed in');
});

test('method::isArray', function(assert) {
	// test valid assertions
	assert.ok(assertTools.isArray([]), 'test a valid input passed in');

	// test invalid assertions
	assert.throws(() => assertTools.isArray({}), /expected an array/, 'test an invalid input passed in');
});

test('method::isNumber', function(assert) {
	// test valid assertions
	assert.ok(assertTools.isNumber(12), 'test a valid input passed in');

	// test invalid assertions
	assert.throws(() => assertTools.isNumber('12'), /expected a number/, 'test an invalid input passed in');
});

test('method::isInteger', function(assert) {
	// test valid assertions
	assert.ok(assertTools.isInteger(12), 'test a valid input passed in');

	// test invalid assertions
	assert.throws(() => assertTools.isInteger(12.5), /expected an integer/, 'test an invalid input passed in');
});

test('method::isBoolean', function(assert) {
	// test valid assertions
	assert.ok(assertTools.isBoolean(true), 'test a valid input passed in');

	// test invalid assertions
	assert.throws(() => assertTools.isBoolean(1), /expected a boolean/, 'test an invalid input passed in');
});

test('method::isObject', function(assert) {
	// test valid assertions
	assert.ok(assertTools.isObject({}), 'test a valid input passed in');

	// test invalid assertions
	assert.throws(() => assertTools.isObject([]), /expected an object/, 'test an invalid input passed in');
});

test('method::isMoment', function(assert) {
	// test valid assertions
	assert.ok(assertTools.isMoment(moment()), 'test a valid input passed in');

	// test invalid assertions
	assert.throws(() => assertTools.isMoment({}), /expected a Moment/, 'test an invalid input passed in');
});

test('method::isUUID', function(assert) {
	// test valid assertions
	assert.ok(assertTools.isUUID(UUID.generate()), 'test a valid input passed in');

	// test invalid assertions
	assert.throws(() => assertTools.isUUID('1233-123123-3123-234'), /expected a UUID/, 'test an invalid input passed in');
});

test('method::test', function(assert) {
	// test valid assertions
	assert.ok(assertTools.test('test', true), 'test a valid input passed in');
});

test('method::throw', function(assert) {
	// valid input
	assert.throws(() => assertTools.throw('this is a throw test'), /this is a throw test/, 'test a throw assertion');

	// invalid input
	assert.throws(() => assertTools.throw(false), /must be a string/, 'test throw assertion if param 1 is not a string');
});
