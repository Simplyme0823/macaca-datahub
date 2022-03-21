'use strict';

module.exports = {
  extends: 'eslint-config-airbnb',
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: [
    'babel',
    'react',
  ],
  rules: {
    camelcase: 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'no-unused-vars': ['error', { args: 'none' }],
    'no-prototype-builtins': 0,
    'max-len': 0,
    'class-methods-use-this': 0,
    'function-paren-newline': 0,
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/no-find-dom-node': 0,
    'react/no-did-mount-set-state': 0,
    'react/jsx-no-target-blank': 0,
    'react/no-did-update-set-state': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/sort-comp': 0,
    'react/require-default-props': 0,
    'react/no-typos': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/no-unused-prop-types': ['warn'],
    'react/self-closing-comp': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/accessible-emoji': 0,
    'no-await-in-loop': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'no-param-reassign': 0,
    'consistent-return': 0,
    'object-curly-newline': ['error', { consistent: true, minProperties: 6 }],
    'arrow-parens': 0,
    'arrow-body-style': ['warn'],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }],
    'import/named': 0,
    'import/no-extraneous-dependencies': 0,
    'no-mixed-operators': 0,
    'no-shadow': 0,
    'no-useless-constructor': 0,
    'no-return-assign': 0,
    'prefer-rest-params': 0,
    'no-restricted-globals': [0, 'location'],
    'prefer-promise-reject-errors': 0,
    'no-bitwise': 0,
    'no-return-await': 0,
    'import/prefer-default-export': 0,
    'func-names': 0,
    'no-use-before-define': 0,
    'global-require': 0,
    'no-else-return': 0,
    'no-lonely-if': 0,
    'guard-for-in': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'no-console': 2,
  },
};