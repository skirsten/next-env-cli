#!/usr/bin/env node

const ENV_MAP = {
  development: 'MOON',
  production: 'MARS'
}

process.exit(process.env.HELLO === ENV_MAP[process.env.NODE_ENV] ? 0 : 1);