# Node.js library template

It uses:

1. Lerna for monorepo management.
2. Includes a private test package to mimic using the lib as a dependency.
3. EcmaScript Modules (ESM)
4. Native file watcher for dev server. No need for nodemon.
5. Native testing and assertions. No need for jest.
6. swc (written in Rust) as dev ts to js compiler for better performance.
7. pnpm and corepack for package management.
8. latest eslint with flat config.
9. Used eslint stylistic instead prettier.

Example projects using this template:

1. https://www.npmjs.com/package/lib-racv-http-client
