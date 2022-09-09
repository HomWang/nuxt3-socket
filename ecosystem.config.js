module.exports = {
  apps: [
    {
      name: "nuxt3-socket",
      script: ".output/server/index.mjs",
      watch: true,
      env: {
        "PORT": 3000,
        "NODE_ENV": "development"
      },
      env_production: {
        "PORT": 3333,
        "NODE_ENV": "production",
      }
    }
  ]
}