import { gql } from "@apollo/client";

const getLangInfo = gql`
  query Language($code: ID!) {
    language(code: $code) {
      code
      name
      native
    }
  }
`;

export default getLangInfo;
