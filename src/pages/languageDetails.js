import React from "react";
import { prop } from "ramda";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Error from "../components/error";
import Loading from "../components/loading";
import Section from "../components/section";
import getLangInfo from "../../API/gqlCalls/getLanguageInfo";

const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LanguageDetails = () => {
  const { code } = useParams();

  const { data, error, loading } = useQuery(getLangInfo, {
    variables: { code },
  });

  const languageDetails = prop("language", data);

  const message = (
    <LanguageContainer>
      {error && <Error />}
      {loading && <Loading />}
      {!error && !loading && languageDetails && (
        <div>
          <p>Language Name: {languageDetails.name}</p>
          <p>Code: {languageDetails.code}</p>
          <p>Native: {languageDetails.native}</p>
        </div>
      )}
    </LanguageContainer>
  );

  return <Section title="Language Details">{message}</Section>;
};

export default LanguageDetails;
