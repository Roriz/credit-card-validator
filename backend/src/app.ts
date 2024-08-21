import Fastify, { FastifyInstance } from "fastify";
import routes from "./routers/index";

export function buildFastify(): FastifyInstance {
  const fastify = Fastify();

  fastify.register(routes);

  return fastify;
}
