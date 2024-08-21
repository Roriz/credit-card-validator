import Fastify from 'fastify';
import routes from './routers/index';

const fastify = Fastify({ logger: true });

fastify.register(routes);

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})
