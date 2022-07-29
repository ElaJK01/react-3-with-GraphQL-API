import React from "react";
import { map, prop } from "ramda";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Error from "../components/error";
import Loading from "../components/loading";
import Section from "../components/section";
import CONTINENT_QUERY from "../../API/gqlCalls/getContinent";

const ContinentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContinentDetails = () => {
  const { code } = useParams();

  const { data, error, loading } = useQuery(CONTINENT_QUERY, {
    variables: { code },
  });

  const continentDetails = prop("continent", data);

  const message = (
    <ContinentContainer>
      {error && <Error />}
      {loading && <Loading />}
      {!error && !loading && continentDetails && (
        <div>
          <h3>{continentDetails.name}</h3>
          <p>Code: {continentDetails.code}</p>
          <div style={{ fontSize: "10px" }}>
            Countries:{" "}
            <ul style={{ listStyle: "none" }}>
              {continentDetails.countries
                |> map((country) => (
                  <li key={prop("code", country)}>{prop("name", country)}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </ContinentContainer>
  );

  return <Section title="Country Details">{message}</Section>;
};

export default ContinentDetails;
