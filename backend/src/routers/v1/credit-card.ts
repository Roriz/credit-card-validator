import { FastifyInstance } from 'fastify';

export async function creditCardRoutes(fastify: FastifyInstance) {
  fastify.post('/credit-card', async (request, reply) => {
    return { message: 'Credit card created' };
  });
}
