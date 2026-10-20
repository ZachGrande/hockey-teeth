import path from "path";
import { fileURLToPath } from "url";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  const compat = new FlatCompat({
    baseDirectory: __dirname,
  });
export default defineConfig([
  globalIgnores([""build/"",""dist/"",""node_modules/"","".env"","".env.*"","".eslintrc.js"","/node_modules","/.pnp",".pnp.js","/coverage","/build",".DS_Store",".env.local",".env.development.local",".env.test.local",".env.production.local","npm-debug.log*","yarn-debug.log*","yarn-error.log*"]),
  {
    extends: fixupConfigRules(compat.extends(
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "airbnb",
      "airbnb-typescript"
    )),
    languageOptions: {
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
      jsx: true,
    },
        project: "./tsconfig.json"
      }
    },
    rules: {
      "no-console": ['error', { allow: ['warn', 'error'] }],
      "no-warning-comments": ['error', { terms: ['todo'], location: 'start' }]
    },
  },
  {
    files: ['vite.config.*', 'vite.*.config.*'],
    languageOptions: {
      globals: {
        ...globals.node
      },
      parser: typescriptParser
    },
    rules: {
      "import/no-extraneous-dependencies": ['error', { devDependencies: true }],
      "import/no-unresolved": 'off'
    },
  }
]);
