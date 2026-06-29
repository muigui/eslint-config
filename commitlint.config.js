export default {
  "extends": [
    `@commitlint/config-conventional`,
  ],
  rules: {
    'body-max-line-length': [ 2, `always`, 360 ],
    'footer-leading-blank': [ 1, `always` ],
    'footer-max-line-length': [ 2, `always`, 240 ],
    'header-max-length': [ 2, `always`, 240 ],
    'type-enum': [
      2,
      `always`,
      [
        `build`,
        `ci`,
        `chore`,
        `deps`,
        `doc`,
        `docs`,
        `feat`,
        `feature`,
        `fix`,
        `perf`,
        `refactor`,
        `release`,
        `revert`,
        `style`,
        `test`,
        `breaking`,
        `new`,
      ],
    ],
  },
};
