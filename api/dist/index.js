"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var express = require("express");
var serverless = require("serverless-http");
var bodyParser = require("body-parser");
var express_graphql_1 = require("express-graphql");
var lib_1 = require("./lib");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/graphql", express_graphql_1.graphqlHTTP({
    schema: lib_1.schema,
    rootValue: lib_1.resolvers,
    graphiql: true,
}));
exports.handler = serverless(app);
