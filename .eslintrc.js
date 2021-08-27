module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb-base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: {
      ts: '@typescript-eslint/parser',
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.vue'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'vue/script-setup-uses-vars': 'error',
    'import/no-named-as-default-member': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ],
    }],
  },
};
