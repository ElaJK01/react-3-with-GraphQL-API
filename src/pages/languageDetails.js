import React from "react";
import { prop } from "ramda";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Error from "../components/error";
import Loading from "../components/loading";
import Section from "../components/section";
import getLangInfo from "../../API/gqlCalls/getLanguageInfo";

const LanguageDetails = () => {
  const { code } = useParams();

  const { data, error, loading } = useQuery(getLangInfo, {
    variables: { code },
  });

  const languageDetails = prop("language", data);

  const message = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error && <Error />}
      {loading && <Loading />}
      {!error && !loading && languageDetails && (
        <div>
          <p>Language Name: {languageDetails.name}</p>
          <p>Code: {languageDetails.code}</p>
          <p>Native: {languageDetails.native}</p>
        </div>
      )}
    </div>
  );

  return <Section title="Language Details" children={message} />;
};

export default LanguageDetails;
