# next-env-cli

Similar to [`dotenv-cli`](https://www.npmjs.com/package/dotenv-cli) but for [`@next/env`](https://www.npmjs.com/package/@next/env) and without any flags or config.

Note: This has nothing to do with [`next-env`](https://www.npmjs.com/package/next-env) which you should not use.

The code for `@next/env` is in the [next.js monorepo](https://github.com/vercel/next.js/tree/canary/packages/next-env).

## Usage

```sh
yarn add -D @next/env next-env-cli
```

```json
// package.json
{
  "scripts": {
    "my-script": "next-env-cli some-executable -p 123"
  }
}
```
