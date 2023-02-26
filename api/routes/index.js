const apiRoutes = async (fastify, options) => {
  fastify.register(require("./url"), { prefix: "/api/urls" });

  fastify.get("/api", async (request, reply) => {
    return {
      message: "Fastify API is on fire",
    };
  });
  fastify.get("/api/ping", async (request, reply) => {
    return {
      message: "pong",
    };
  });
};

module.exports = apiRoutes;
