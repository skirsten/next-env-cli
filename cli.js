#!/usr/bin/env node

const { spawnSync } = require("child_process");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd(), process.env.NODE_ENV !== 'production');

const args = process.argv.slice(2);

const result = spawnSync(args[0], args.slice(1), { stdio: "inherit" });
process.exit(result.status);
