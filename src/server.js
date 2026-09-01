const app = require('./app');
const env = require('./config/env');
const connectDB = require('./config/database');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const jwt = require('jsonwebtoken');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

connectDB();

async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.use(
    '/graphql',
    expressMiddleware(apolloServer, {
      context: async ({ req }) => {
        const authHeader = req.headers.authorization || '';
        if (authHeader.startsWith('Bearer ')) {
          const token = authHeader.split(' ')[1];
          try {
            const usuario = jwt.verify(token, env.JWT_SECRET);
            return { usuario };
          } catch (e) {
            return {};
          }
        }
        return {};
      },
    })
  );

  app.listen(env.PORT, () => {
    console.log(`Servidor LogisTech rodando na porta ${env.PORT}`);
    console.log(`API REST: http://localhost:${env.PORT}/api`);
    console.log(`GraphQL: http://localhost:${env.PORT}/graphql`);
  });
}

startServer();
