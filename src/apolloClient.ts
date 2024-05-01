import {
  ApolloLink,
  InMemoryCache,
  ApolloClient,
  createHttpLink,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";

import { config } from "./config";
import { readToken } from "./utils/storage";
import { showToast } from "./utils/toast";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions }) => {
      const code = (extensions as unknown as any)?.code;
      console.log("Error: ", code, message);
      showToast(message, "error");
    });
  }
});

const httpLink = createHttpLink({
  uri: `${config.graphQlUrl}`,
});

const wsLink = new WebSocketLink({
  uri: `${config.wsUrl}`,
  options: {
    reconnect: true,
    connectionParams: () => {
      const token = readToken();
      return {
        Authorization: token ? `Bearer ${token}` : "",
      };
    },
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = readToken();

  // return the headers to the context so httpLink can read them
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, authLink.concat(link)]),
});
