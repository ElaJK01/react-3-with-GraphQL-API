import { gql } from "@apollo/client";

const COUNTRY_QUERY = (code) => gql`
  {
    country(code: ${code}) {
      name
      native
      currency
      languages {
        name
      }
      emoji
      emojiU
      states {
        name
        country {
          name
        }
      }
      phone
      continent {
        name
        code
      }
    }
  }
`;
export default COUNTRY_QUERY;
