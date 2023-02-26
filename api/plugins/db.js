"use strict";

const fastifyPlugin = require("fastify-plugin");

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
async function dbConnector(fastify, options, next) {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    fastify.log.info("Connected to MongoDB");
    next();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

module.exports = fastifyPlugin(dbConnector);
