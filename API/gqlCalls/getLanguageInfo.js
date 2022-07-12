import { gql } from "@apollo/client";

const getLangInfo = gql`
  query Language($code: String) {
    language(code: $code) {
      code
      name
      native
    }
  }
`;

export default getLangInfo;
