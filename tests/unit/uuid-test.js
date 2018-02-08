import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { module, test } from 'qunit';
import { UUID } from '@busy-web/utils';

module('Unit | Utility | UUID');

// Replace this with your real tests.
test('it works', function(assert) {
	// test to see if class exists.
	assert.ok(UUID);
});

test('method generate', function(assert) {
	const count = 10;
	const ids = A();
	const uniq = [];
	for (var i=0; i<count; i++) {
		const id = UUID.generate();
		if (uniq.indexOf(id) === -1) {
			const object = EmberObject.create({id: id, isValid: UUID.isValid(id), timesGenerated: 0});
			ids.pushObject(object);
			uniq.push(id);
		} else {
			ids.findBy('id', id).incrementProperty('timesGenerated');
		}
	}

	// assert generate method created a valid UUID
	const invalid = ids.filterBy('isValid', false);
	assert.equal(invalid.length, 0, `generated ${invalid.length} invalid ids`);

	const nonuniq = ids.filter(item => item.get('timesGenerated') !== 0);
	assert.equal(nonuniq.length, 0, `generated ${nonuniq.length} non uniq ids`);
});

test('method isValid', function(assert) {
	// test isvalid with a valid UUID. result should be true.
	const validId = "8d594d76-61ee-4b9c-97b8-3ab1becee083";
	assert.equal(UUID.isValid(validId), true);

	// test isValid with an invalid UUID. result should be false.
	const invalidId = "8d594d76-61ee-4b9c-97b83-ab1becee08";
	assert.equal(UUID.isValid(invalidId), false);
});
