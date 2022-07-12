import React, { useEffect, useState } from "react";
import { add, length, map, multiply, path, prop, slice, sortBy } from "ramda";
import Pagination from "../components/pagination";
import CountriesList from "../components/countriesList";
import Error from "../components/error";
import Loading from "../components/loading";
import { and, encase, fork, lastly } from "fluture";
import styled from "styled-components";
import Section from "../components/section";
import fetchData, { fetchDataWithVariables } from "../../API/fetchDataFn";
import LANGUAGES_QUERY from "../../API/gqlCalls/getLanguages";
import getLangInfo from "../../API/gqlCalls/getLanguageInfo";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const LanguageDetails = (props) => {
  const { code } = useParams();
  console.log("code", code);
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data } = useQuery(getLangInfo, { variables: { code } });
  console.log("data details", data);

  // const fetchDetails = () =>
  //   encase(setError)(false)
  //   |> and(encase(setLoading)(true))
  //   |> and(fetchDataWithVariables(getLangInfo, { code: code }))
  //   |> lastly(encase(setLoading)(false))
  //   |> fork(() => setError(true))((res) =>
  //     setDetails(path(["data", "language"], res))
  //   );

  // console.log("details", details);
  //
  // useEffect(() => {
  //   fetchDetails();
  // }, [setDetails]);

  const message = (
    <div>
      {error && <Error />}
      {loading && <Loading />}
      {!error && !loading && details
        |> map((i) => (
          <div>
            <p>Language: {path(["data", "language"], i)}</p>
            <p>Code: {path(["data", "code"], i)}</p>
            <p>Native: {path(["data", "native"], i)}</p>
          </div>
        ))}
    </div>
  );

  return <Section title={"Language Details"} children={message} />;
};

export default LanguageDetails;
