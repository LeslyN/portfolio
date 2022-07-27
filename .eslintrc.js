module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],


        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],
        // disable rules from base configurations
        "for-direction": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            "files": [
                "**/*.test.js",
                "**/*.test.jsx"
            ],
            "env": {
                "jest": true
            }
        }
    ]
};