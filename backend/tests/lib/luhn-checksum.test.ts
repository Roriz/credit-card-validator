import { test, expect, describe } from '@jest/globals';
import { luhnChecksum } from '../../src/lib/luhn-checksum';

describe('luhn-checksum', () => {
  test('validate American Express', () => expect(luhnChecksum('378282246310005')).toBe(true))
  test('validate Diners Club', () => expect(luhnChecksum('30569309025904')).toBe(true))
  test('validate MasterCard', () => expect(luhnChecksum('5555555555554444')).toBe(true))
  test('validate Visa', () => expect(luhnChecksum('4111111111111111')).toBe(true))
  test('invalidate checksum', () => expect(luhnChecksum('4111111111111112')).toBe(false))
});
