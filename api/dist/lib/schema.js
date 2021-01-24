"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var schema = graphql_1.buildSchema("\n  type Query {\n    helloWord: String\n  }  \n");
exports.default = schema;
