import { createServer, Factory, Model } from 'miragejs';

type User = {
  email: string;
  name: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        email(i: number) {
          return `user${i + 1}@gmail.com`;
        },
        name(i: number) {
          return `User ${i + 1}`;
        },
        createdAt() {
          return new Date().toISOString();
        },
      }),
    },
    seeds(server) {
      server.createList('user', 10);
    },
    routes() {
      this.namespace = '/api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
