// __tests__/passwordGenerator.test.js

const { generatePassword, isPasswordSecure } = require('../src/keyForge');

describe('generatePassword', () => {
  test('should generate a password with the specified length', () => {
    const passwordLength = 16;
    const password = generatePassword(passwordLength);
    expect(password).toHaveLength(passwordLength);
  });

  test('should generate a password with numbers, lowercase, and special characters', () => {
    const password = generatePassword(12, { numbers: true, lowercase: true });
    expect(password).toMatch(/^[0-9a-z!@#$%^&*()-_=+[\]{}|;:,.<>?]+$/);
  });
});

describe('isPasswordSecure', () => {
  test('should return true for a secure password', () => {
    const securePassword = 'S3cureP@ss!';
    expect(isPasswordSecure(securePassword)).toBe(true);
  });

  test('should return false for an insecure password', () => {
    const insecurePassword = 'weak';
    expect(isPasswordSecure(insecurePassword)).toBe(false);
  });
});
