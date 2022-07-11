import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import LANGUAGES_QUERY from "../API/gqlCalls/getLanguages";

const httpLink = createHttpLink({
  uri: "https://countries.trevorblades.com/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: LANGUAGES_QUERY,
//   })
//   .then((result) => console.log("data in client", result));

export default client;
