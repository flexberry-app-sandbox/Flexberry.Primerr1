import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-primerr-animal', 'Unit | Serializer | i-i-s-primerr-animal', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-primerr-animal',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-primerr-animal',
    'model:i-i-s-primerr-burrow',
    'model:i-i-s-primerr-country',
    'model:i-i-s-primerr-forest',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});