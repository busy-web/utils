
import EmberObject from 'ember-object';
import CryptoJS from 'crypto-js';

const Hash = EmberObject.extend();

Hash.reopenClass({
	sha1() {
		return CryptoJS.SHA1.apply(CryptoJS, arguments);
	},

	sha256() {
		return CryptoJS.SHA256.apply(CryptoJS, arguments);
	},

	hmacSHA256() {
		return CryptoJS.HmacSHA256.apply(CryptoJS, arguments);
	}
});

export default Hash;
