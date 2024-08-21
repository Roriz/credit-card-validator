import { FastifyInstance } from 'fastify';
import { luhnChecksum } from '../../lib/luhn-checksum';

interface ICreditCardParams {
  cardNumber: string;
}

export async function creditCardRoutes(fastify: FastifyInstance) {
  fastify.post('/credit-card', async (request, reply) => {
    const { cardNumber } = request.body as ICreditCardParams;

    try {
      if (!luhnChecksum(cardNumber)) {
        reply.code(400);
        return { errors: [{ code: 'credit-card/card-is-invalid' }] };
      }
  
      return {};
    } catch (error) {
      reply.code(400);
      return { errors: [{ code: 'credit-card/invalid-characters' }] };
    }
  });
}
