import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://api.spacex.land/graphql/",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        launchesPast(limit: 10) {
          mission_name
          id
        }
      }
    `,
  })
  .then((result) => console.log("data in client", result));

export default client;
