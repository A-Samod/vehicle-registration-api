// swagger/info.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  openapi: "3.0.0",
  info: {
    title: "User Management API",
    version: "1.0.0",
    description:
      "API for managing users, including CRUD operations and vehicle number validation.",
  },
  servers: [
    {
      url: process.env.LOCAL_SERVER,
      description: "Local Server",
    },
    {
      url: process.env.DEPLOYED_SERVER,
      description: "Deployed Server",
    },
  ],
};
