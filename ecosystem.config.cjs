module.exports = {
  apps: [
    {
      name: "unigis-worker",
      script: "index.js",
      watch: false,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
