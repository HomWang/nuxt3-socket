#!/bin/bash
rm -rf pnpm-lock.yarml
git pull
pnpm install
pnpm run build
pm2 delete nuxt3-socket
yarn prd