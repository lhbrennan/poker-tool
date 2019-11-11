/* eslint-env node */
module.exports = {
  extends: ['react-app', require.resolve('eslint-config-fusion')],
  plugins: ["prettier"],
  rules: {
    'prettier/prettier': ['error', { bracketSpacing: true }],
    // 'flowtype/space-after-type-colon': 0,
  },
    settings: {
      "flowtype": {
        "onlyFilesWithFlowAnnotation": true,
      },
      react: {
        version: 'detect',
      },
    },
};
