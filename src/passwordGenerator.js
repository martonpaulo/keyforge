// src/passwordGenerator.js

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
