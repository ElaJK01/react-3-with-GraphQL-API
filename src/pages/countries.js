import React, { useEffect, useState } from "react";
import { add, length, map, multiply, path, prop, slice, sortBy } from "ramda";
import Pagination from "../components/pagination";
import CountriesList from "../components/countriesList";
import Error from "../components/error";
import Loading from "../components/loading";
import { and, encase, fork, lastly } from "fluture";
import styled from "styled-components";
import { fetchData } from "../../API/fetchDataFn";
import LANGUAGES_QUERY from "../../API/gqlCalls/getLanguages";
import COUNTRIES_QUERY from "../../API/gqlCalls/getCountries";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

const SectionTitle = styled.h3`
  text-align: center;
  margin-top: 50px;
  box-sizing: border-box;
`;

const SectionState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Countries = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const sortByTeamName = sortBy(prop("teamName"));

  // const fetchTeams = () =>
  //   encase(setError)(false)
  //   |> and(encase(setLoading)(true))
  //   |> and(delay())
  //   |> and(getTeams(11, 200))
  //   |> map(sortByTeamName)
  //   |> lastly(encase(setLoading)(false))
  //   |> fork(() => setError(true))(setTeamsList);
  //
  // useEffect(() => fetchTeams(), [setTeamsList]);

  const fetchCountries = () =>
    encase(setError)(false)
    |> and(encase(setLoading)(true))
    |> and(fetchData(COUNTRIES_QUERY))
    |> lastly(encase(setLoading)(false))
    |> fork(() => setError(true))((res) =>
      setCountriesList(path(["data", "countries"], res))
    );

  useEffect(() => {
    fetchCountries();
  }, [setCountriesList]);

  console.log("countriesList", countriesList);

  const currentDataCount = () => {
    const firstPageIndex = multiply(currentPage - 1, itemsPerPage);
    const lastPageIndex = add(firstPageIndex, itemsPerPage);
    return countriesList |> slice(firstPageIndex, lastPageIndex);
  };

  const currentData = currentDataCount();

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Section>
        <SectionTitle>Teams list</SectionTitle>
        <div>
          {!loading && !error && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={length(countriesList)}
              paginate={handlePaginate}
              currentPage={currentPage}
              adjacentPages={3}
            />
          )}
          {error && (
            <SectionState>
              <Error onClick={() => alert("clicked!")} />
            </SectionState>
          )}
          {loading ? (
            <SectionState>
              <Loading />
            </SectionState>
          ) : (
            !error && <CountriesList list={currentData} />
          )}
        </div>
      </Section>
    </div>
  );
};

export default Countries;
