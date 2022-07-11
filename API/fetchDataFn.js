import { attemptP } from "fluture";
import client from "../src/clientGraphQL";

const fetchData = (query) =>
  attemptP(() =>
    client.query({
      query,
    })
  );

export default fetchData;
