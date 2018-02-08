import { module, test } from 'qunit';
import { Locale } from '@busy-web/utils';

module('Unit | Utility | loc');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = Locale;
  assert.ok(result);
});

test('format', function(assert) {

  const str = 'MMM Do h:mm A';
  const result = 'll h:hh a';

	// test english returns the passed in string
  assert.ok(Locale.format(str) === str);

	// test spanish returns the spanish string
  assert.ok(Locale.format(str, 'es') === result);
});
