import cors from "@fastify/cors";
import { buildFastify } from "./app";

const fastify = buildFastify();

fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

const port = Number(process.env.PORT) || 3000;

fastify.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
