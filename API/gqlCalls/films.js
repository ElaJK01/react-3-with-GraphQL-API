import { gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      id
    }
  }
`;
export default FILMS_QUERY;
