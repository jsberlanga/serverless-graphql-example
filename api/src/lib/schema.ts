import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    helloWorld: String
  }  
`);

export default schema;
