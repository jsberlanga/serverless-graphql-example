import * as express from "express";
import * as serverless from "serverless-http";
import * as bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import { schema, resolvers } from "./lib";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

export const handler = serverless(app);
