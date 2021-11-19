# next-env-cli

Similar to [`dotenv-cli`](https://www.npmjs.com/package/dotenv-cli) but build with [`@next/env`](https://www.npmjs.com/package/@next/env) and without any flags or config.

It is usefull if you want to run a script and use the same environment variables as your Next.js project.

Note: This has nothing to do with [`next-env`](https://www.npmjs.com/package/next-env) which you should not use.

The code for `@next/env` is in the [Next.js monorepo](https://github.com/vercel/next.js/tree/canary/packages/next-env).

## Usage

```sh
yarn add -D @next/env next-env-cli
```

### package.json

```json
{
  "scripts": {
    "my-script": "next-env-cli some-executable -p 123"
  }
}
```
