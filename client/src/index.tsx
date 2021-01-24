import React from "react";
import ReactDOM from "react-dom";
import { createClient, Provider } from "urql";
import App from "./App";

const client = createClient({
  url: "http://localhost:3000/dev/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
