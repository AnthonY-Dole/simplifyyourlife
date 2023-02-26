require("dotenv").config();
const shortid = require("shortid");
const Url = require("../../models/url");
const UrlRoutes = async (fastify, options) => {
  fastify.post("/shortner", async (request, reply) => {
    const { longUrl } = request.body;
    const baseUrl = process.env.BASE_URL;
    try {
      if (!longUrl) {
        return reply.code(400).send({ message: "Please provide a valid url" });
      }
      const urlCode = shortid.generate();
      if (longUrl) {
        let url = await Url.findOne({ longUrl });

        if (url) {
          return reply.code(200).send({
            longUrl: url.longUrl,
            shortUrl: url.shortUrl,
          });
        } else {
          const shortUrl = baseUrl + "/" + urlCode;
          url = new Url({
            longUrl,
            shortUrl,
            urlCode,
            date: new Date(),
          });
          await url.save();
          return reply.code(200).send({
            longUrl: url.longUrl,
            shortUrl: url.shortUrl,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  });

  fastify.get("/:code", async (request, reply) => {
    const { code } = request.params;
    const shortUrl = await Url.findOne({ urlCode: code });
    try {
      if (shortUrl) {
        reply.redirect(shortUrl.longUrl);
      } else {
        return reply.code(400).send({ message: "No url found" });
      }
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = UrlRoutes;
