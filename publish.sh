#!/bin/bash
rm -rf pnpm-lock.yaml
git pull
pnpm install
pnpm run build
pm2 delete nuxt3-socket
yarn prd