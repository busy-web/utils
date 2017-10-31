/**
 * @module Utils
 *
 */
import EmberObject from '@ember/object';
import { assert } from '@ember/debug';
import { v4 } from 'ember-uuid';

/***/
const UUID = EmberObject.extend();

/**
 * `Util/UUID`
 *
 * @class UUID
 * @namespace Utils
 */
UUID.reopenClass({
	/**
	 * Generates a valid version 4 uuid
	 *
	 * @public
	 * @method generate
	 * @return {string} uuid
	 */
	generate() {
		// gennerate the uuid
		const id = v4.apply(v4, arguments);

		// assert the uuid created a valid uuid
		assert('Generate created an invalid UUID', this.isValid(id));

		// return the uuid.
		return id;
	},

	/**
	 * Tests if the id passed in is a valid uuid
	 *
	 * @public
	 * @method isValid
	 * @param {string} id The value to test.
	 * @return {boolean}
	 */
	isValid(id) {
		return /^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i.test(id);
	}
});

export default UUID;
