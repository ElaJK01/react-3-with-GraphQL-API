import { attemptP } from "fluture";
import client from "../src/clientGraphQL";

export const fetchData = (query) =>
  attemptP(() =>
    client.query({
      query,
    })
  );

export const fetchDataWithVariables = (query, variables) =>
  attemptP(() => client.query({ query }, { variables }));
