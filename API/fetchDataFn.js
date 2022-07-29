import { attemptP, encaseP } from "fluture";
import client from "../src/clientGraphQL";

export const fetchData = (query) =>
  encaseP(() =>
    client.query({
      query,
    })
  );
