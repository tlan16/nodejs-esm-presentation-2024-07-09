const packageConfigs = ["lib", "test"]
  .map((packageName) => ([
  [`packages/${packageName}/*.ts`, `eslint --config packages/${packageName}/eslint.config.mjs --fix`],
  [`packages/${packageName}/*.js`, `eslint --config packages/${packageName}/eslint.config.mjs --fix`],
  [`packages/${packageName}/**/*.ts`, `eslint --config packages/${packageName}/eslint.config.mjs --fix`],
  [`packages/${packageName}/**/*.js`, `eslint --config packages/${packageName}/eslint.config.mjs --fix`],
]));

/**
 * @type {import("lint-staged").Config}
 */
const config = {
  ...Object.fromEntries(packageConfigs),
  "*.md": "pnpm dlx prettier --parser markdown --write",
  "*.sh": "pnpm dlx shellcheck",
  "*.yaml": "yamllint",
  "*.yml": "yamllint",
  ".husky/pre-commit": "pnpm dlx shellcheck",
};

export default config;
