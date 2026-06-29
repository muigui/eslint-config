export default {
  name: `@muigui/eslint-config/settings`,
  settings: {
    perfectionist: {
      fallbackSort: {
        order: `asc`,
        type: `line-length`,
      },
      ignoreCase: false,
      newlinesBetween: `ignore`,
      newlinesInside: `ignore`,
      order: `asc`,
      partitionByNewLine: true,
      specialCharacters: `keep`,
      type: `natural`,
    },
  },
};
