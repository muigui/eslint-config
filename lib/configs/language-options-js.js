import GLOBALS from 'globals';

export default {
  languageOptions: {
    ecmaVersion: `latest`,

    globals: {
      ...GLOBALS.vitest,
      ...GLOBALS.node,
    },

    sourceType: `module`,
  },
  name: `@muigui/eslint-config/language/javascript`,
};
