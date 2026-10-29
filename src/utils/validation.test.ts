import test from 'node:test';
import assert from 'node:assert/strict';
import { validateGrowerForm, generateWhatsAppLink, formatPhoneNumber } from './validation.ts';

test('validateGrowerForm accepts valid grower applications', () => {
  const result = validateGrowerForm({
    fullName: 'Muhammad Aslam',
    phone: '03018770137',
    location: 'Rahim Yar Khan',
    acreage: 25,
    cropInterest: 'Cotton'
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateGrowerForm detects invalid phone numbers and missing fields', () => {
  const result = validateGrowerForm({
    fullName: '',
    phone: '12345',
    location: '',
    acreage: 0,
    cropInterest: 'InvalidCrop'
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.location);
  assert.ok(result.errors.acreage);
  assert.ok(result.errors.cropInterest);
});

test('generateWhatsAppLink produces correctly encoded URL with details', () => {
  const link = generateWhatsAppLink({
    fullName: 'Tariq Mehmood',
    phone: '+923008675506',
    location: 'Sadiqabad',
    acreage: 50,
    cropInterest: 'Rice',
    notes: 'Looking for super basmati seed stock'
  }, '923018770137');

  assert.ok(link.startsWith('https://wa.me/923018770137?text='));
  assert.ok(link.includes('Tariq%20Mehmood'));
  assert.ok(link.includes('Sadiqabad'));
  assert.ok(link.includes('50%20Acres'));
});

test('formatPhoneNumber formats Pakistani numbers cleanly', () => {
  assert.equal(formatPhoneNumber('923018770137'), '+92 301 8770137');
  assert.equal(formatPhoneNumber('03008675506'), '0300 8675506');
});
