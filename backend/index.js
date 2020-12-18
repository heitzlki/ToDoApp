const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config();
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

//MongoDB connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('🍃 Connected to Database!');
});

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: (ctx) => ctx
});

server.listen().then(() => {
  console.log(`🚀  Server ready at http://${process.env.URI}:${process.env.PORT}`);
});