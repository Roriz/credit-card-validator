import { FastifyInstance } from 'fastify';
import { luhnChecksum } from '../../lib/luhn-checksum';

interface ICreditCardParams {
  cardNumber: string;
}

export async function creditCardRoutes(fastify: FastifyInstance) {
  fastify.post('/credit-card', async (request, reply) => {
    const { cardNumber } = request.body as ICreditCardParams;

    if (!luhnChecksum(cardNumber)) {
      reply.code(400);
      return { message: 'Invalid credit card number' };
    }

    return { message: 'Credit card number is valid' };
  });
}
