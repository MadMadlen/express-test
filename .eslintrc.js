module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "mocha": true,
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "expect": true,
        "chaiRequest": true,
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
};
