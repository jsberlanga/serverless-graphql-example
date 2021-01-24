import { useQuery } from "urql";
import { HelloWorldQuery } from "./generated/types";

const helloWorldQuery = /* GraphQL*/ `
  query helloWorld {
    helloWorld
  }
`;

function App() {
  const [{ data }] = useQuery<HelloWorldQuery>({
    query: helloWorldQuery,
  });

  return <div>{data?.helloWorld}</div>;
}

export default App;
