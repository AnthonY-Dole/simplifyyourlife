"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/api/ping", async function (request, reply) {
    return { pong: "pong" };
  });
};
