module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "global-require": 0,
    "import/extensions": [
      1,
      {
        "extensions": [".js", ".ts", ".tsx"]
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "import/no-dynamic-require": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/label-has-for": 0,
    "max-classes-per-file": 0,
    "no-undef": 0,
    "no-bitwise": 0,
    "no-debugger": 2,
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-plusplus": [
      2,
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-restricted-syntax": 0,
    "no-shadow": 0,
    "no-unused-expressions": 0,
    "prefer-destructuring": 0,
    "react/destructuring-assignment": [2, "always"],
    "react/display-name": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".ts", ".tsx"]
      }
    ],
    "react/jsx-indent": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/no-array-index-key": 0,
    "react/no-danger": 0,
    "react/no-find-dom-node": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/sort-comp": [
      2,
      {
        "order": [
          "/^contextType$/",
          "static-variables",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render"
        ]
      }
    ],
    "react/static-property-placement": 0,
    "react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": 2,
    "consistent-return": 0
  },
};
