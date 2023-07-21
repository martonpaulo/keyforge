// src/keyForge.js

/**
 * Generate a secure password with specified length and options.
 *
 * @param {number} [length=12] - The length of the generated password.
 * @param {object} [options={}] - The options for password generation.
 * @param {boolean} [options.numbers=true] - Include numbers in the password.
 * @param {boolean} [options.symbols=true] - Include symbols in the password.
 * @param {boolean} [options.uppercase=true] - Include uppercase letters in the password.
 * @param {boolean} [options.lowercase=true] - Include lowercase letters in the password.
 * @returns {string} The generated password.
 */
function generatePassword(length = 16, options = {}) {
  const defaultOptions = {
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  };

  const mergedOptions = { ...defaultOptions, ...options };
  const characters = {
    numbers: '0123456789',
    symbols: '!@#$%^&*()-_=+[]{}|;:,.<>?',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
  };

  let charset = '';

  for (const option in mergedOptions) {
    if (mergedOptions[option]) {
      charset += characters[option];
    }
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

/**
 * Checks if a password meets the security criteria.
 *
 * The password must have a minimum length and contain at least one number, one uppercase letter,
 * one lowercase letter, and one special character.
 *
 * @param {string} password - The password to be checked.
 * @returns {boolean} Returns true if the password is secure, otherwise false.
 *
 * @example
 * const password1 = 'SecureP@ss123';
 * const isSecure1 = isPasswordSecure(password1); // true
 *
 * const password2 = 'weak';
 * const isSecure2 = isPasswordSecure(password2); // false
 */
function isPasswordSecure(password) {
	const minLength = 8;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_\-=[\]{}|;:',.<>?]/.test(password);

  const isSecure =
    password.length >= minLength &&
    hasNumber &&
    hasUppercase &&
    hasLowercase &&
    hasSpecialChars;

  return isSecure;
}

module.exports = {
  generatePassword,
  isPasswordSecure,
};
