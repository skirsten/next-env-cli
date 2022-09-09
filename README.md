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
    "my-script": "next-env-cli some-executable -p 123",
    "my-dev-script": "NODE_ENV='development' next-env-cli some-executable -p 123"
  }
}
```

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/skirsten"><img src="https://avatars.githubusercontent.com/u/1972314?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Simon Kirsten</b></sub></a><br /><a href="https://github.com/skirsten/next-env-cli/commits?author=skirsten" title="Code">💻</a> <a href="#ideas-skirsten" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center"><a href="https://natterstefan.me/"><img src="https://avatars.githubusercontent.com/u/1043668?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stefan Natter</b></sub></a><br /><a href="https://github.com/skirsten/next-env-cli/commits?author=natterstefan" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

([emoji key documentation](https://allcontributors.org/docs/en/emoji-key))