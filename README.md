# KeyForge

[![npm version](https://img.shields.io/npm/v/@martonpaulo/keyforge.svg)](https://www.npmjs.com/package/@martonpaulo/keyforge)
[![License](https://img.shields.io/github/license/martonpaulo/keyforge)](https://github.com/seunome/keyforge/blob/master/LICENSE)

KeyForge is a secure and flexible password generation and evaluation library for Node.js. It allows you to generate strong, cryptographically secure passwords with customizable options, and also provides a function to check the strength and security level of existing passwords.

## Installation

To install the library, use npm:

```bash
npm install @martonpaulo/keyforge
```

## Usage

### Generate a Password

```javascript
const keyForge = require('@martonpaulo/keyforge');

const password = keyForge.generatePassword(16, { numbers: true, symbols: true });
console.log(password); // Output: "A#5h2v$-Bp7f!+D"
```

### Check Password Security

```javascript
const keyForge = require('@martonpaulo/keyforge');

const password1 = 'SecureP@ss123';
const isSecure1 = keyForge.isPasswordSecure(password1); // true

const password2 = 'weak';
const isSecure2 = keyForge.isPasswordSecure(password2); // false
```

### Options
The generatePassword function accepts an optional options object to customize password generation:

- `length`: The length of the generated password. (Default: 12)
- `numbers`: Include numbers in the password. (Default: true)
- `symbols`: Include symbols in the password. (Default: true)
- `uppercase`: Include uppercase letters in the password. (Default: true)
- `lowercase`: Include lowercase letters in the password. (Default: true)

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.