import Fastify from 'fastify';
import { config } from './config';

const app = Fastify({ logger: true });

app.get('/api', async (request, reply) => {
  return { hello: 'world' };
});

(async () => {
  try {
    await app.listen(config.PORT);
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
})();
