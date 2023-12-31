module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // You can customize other rules based on your needs
    "max-params": ["error", 4], // Maximum number of parameters for a function
    "max-lines": [
      "error",
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "no-useless-escape": "off",
  },
};
