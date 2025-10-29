const globals = require("globals");
const tseslint = require("typescript-eslint");
const pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");

module.exports = [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
