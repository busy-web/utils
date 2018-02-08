import { module, test } from 'qunit';
import moment from 'moment';
import { Time } from '@busy-web/utils';

module('Unit | Utility | Time');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = Time;
  assert.ok(result);
});

test('timestamp is in utc', function(assert) {
	const date = moment().unix();
	const time = Time.timestamp();

	const zone = moment().utcOffset()*60;

	assert.equal(date + zone, time);
});

test('timezone equals moment timezones', function(assert) {
	const mZone = moment().utcOffset()*60;
	const zone = Time.timezone();

	assert.equal(mZone, zone);
});

test('date does not convert timestamp', function(assert) {
	const time = moment().unix();

	assert.equal(time, Time.date(time).unix());
});

test('now returns now in utc', function(assert) {
	const time = moment();
	const newTime = Time.now();

	const zone = moment().utcOffset()*60;

	assert.equal(time.unix() + zone, newTime.unix());
});
