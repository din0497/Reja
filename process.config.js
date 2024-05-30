module.exports = {
  apps: [
    {
      name: "REJA",
      cwd: "./",
      script: "./server.js",
      watch: false,
      instance: 2,
      exec_mode: "cluster",
    },
  ],
};
