import { gql } from "@apollo/client";

const getLangInfo = (code) => gql`
    {
      language(code: ${code}) {
        code
        name
        native
      }
    }
  `;

export default getLangInfo;
