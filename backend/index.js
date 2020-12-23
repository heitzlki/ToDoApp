const { ApolloServer, gql } = require("apollo-server");
require("dotenv").config();
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

//MongoDB connection
mongoose.connect(process.env.DATABASE_FLEXNOTE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Disable the DeprecationWarning by findOneAndUpdate() function.
mongoose.set("useFindAndModify", false);
mongoose.connection.once("open", () => {
  console.log("🍃 Connected to Database!");
});

const server = new ApolloServer({
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
  typeDefs,
  resolvers,
  playground: true,
  context: (ctx) => ctx,
});

server.listen().then(() => {
  console.log(
    `🚀  Server ready at http://${process.env.URI}:${process.env.PORT}`
  );
});
