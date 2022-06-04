import { createServer, Factory, Model, Response } from 'miragejs';

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
      server.createList('user', 100);
    },
    routes() {
      this.namespace = '/api';
      this.timing = 750;

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams!;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd,
        );

        return new Response(
          200,
          {
            'x-total-count': String(total),
          },
          { users },
        );
      });
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
