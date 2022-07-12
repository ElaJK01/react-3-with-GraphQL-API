import React from "react";
import { gql, useQuery } from "@apollo/client";
import Section from "../components/section";
import getLangInfo from "../../API/gqlCalls/getLanguageInfo";
import { fetchData } from "../../API/fetchDataFn";
import { fork } from "fluture";
import client from "../clientGraphQL";

const sectionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
  "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const About = () => {
  const code = "af";
  const { data, error, loading } = useQuery(getLangInfo, {
    variables: { code: "af" },
  });

  console.log("query", getLangInfo);

  console.log("data details", data, error);

  // client
  //   .query({
  //     query: gql`
  //       query Query {
  //         language(code: $code) {
  //           code
  //           name
  //           native
  //         }
  //       }
  //     `,
  //     variables: {
  //       code,
  //     },
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  return <Section title="About" text={sectionText} />;
};

export default About;
