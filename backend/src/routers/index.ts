import { FastifyInstance } from 'fastify';
import { creditCardRoutes } from './v1/credit-card';

export default async function registerRoutes(fastify: FastifyInstance) {
  fastify.register(creditCardRoutes, { prefix: '/v1' });
}
