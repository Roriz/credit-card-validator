import { FastifyInstance } from 'fastify';
import { creditCardRoutes } from './v1/credit-card';

export default function routes(fastify: FastifyInstance) {
  fastify.register(creditCardRoutes);
}
