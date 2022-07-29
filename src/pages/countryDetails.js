import React from "react";
import { indexOf, map, prop } from "ramda";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Error from "../components/error";
import Loading from "../components/loading";
import Section from "../components/section";
import COUNTRY_QUERY from "../../API/gqlCalls/getCountry";

const CountryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountryDetails = () => {
  const { code } = useParams();

  const { data, error, loading } = useQuery(COUNTRY_QUERY, {
    variables: { code },
  });

  const countryDetails = prop("country", data);

  const message = (
    <CountryContainer>
      {error && <Error />}
      {loading && <Loading />}
      {!error && !loading && countryDetails && (
        <div>
          <h3>
            {countryDetails.name} {countryDetails.emoji}
          </h3>
          <p>Code: {countryDetails.code}</p>
          <p>Capital: {countryDetails.capital}</p>
          <p>Currency: {countryDetails.currency}</p>
          <p>Continent: {prop("name", countryDetails.continent)}</p>
          <p>Phone: {countryDetails.phone}</p>
          <div style={{ fontSize: "10px" }}>
            Languages:{" "}
            <ul style={{ listStyle: "none" }}>
              {countryDetails.languages
                |> map((lang) => (
                  <li key={prop("code", lang)}>{prop("name", lang)}</li>
                ))}
            </ul>
          </div>
          <div style={{ fontSize: "10px" }}>
            States:{" "}
            <ul style={{ listStyle: "none" }}>
              {countryDetails.states
                |> map((state) => (
                  <li key={indexOf(state, countryDetails.states)}>
                    {prop("name", state)}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </CountryContainer>
  );

  return <Section title="Country Details">{message}</Section>;
};

export default CountryDetails;
