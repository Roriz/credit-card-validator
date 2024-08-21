import { creditCardRoutes } from './v1/credit-card';

export default function routes(fastify) {
  fastify.register(creditCardRoutes);
}
