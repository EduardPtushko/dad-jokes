module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react",
        "plugin:jest/recommended",
    ],
    plugins: ["react", "import", "jsx-a11y", "react-hooks", "jest", "emotion"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        "jest/globals": true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            webpack: {
                config: "webpack.config.js",
            },
        },
    },
    rules: {
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "no-console": "warn",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-member-accessibility": "no-public",
        "import/prefer-default-export": "off",
        "jsx-a11y/label-has-for": "off",
        "jsx-a11y/accessible-emoji": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "emotion/jsx-import": "error",
        "emotion/no-vanilla": "error",
        "emotion/import-from-emotion": "error",
        "emotion/styled-import": "error",
    },
};
