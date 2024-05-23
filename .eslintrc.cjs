module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended-legacy",
    "plugin:security/recommended-legacy",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      alias: {
        map: [
          ["@src", "./src"],
          ["@service-worker", "./service-worker"],
          ["@content-scripts", "./content-scripts"],
          ["@shared", "./shared"],
        ],
      },
    },
  },
};
