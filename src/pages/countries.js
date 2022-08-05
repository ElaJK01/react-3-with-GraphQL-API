import React, { useEffect, useState } from "react";
import { add, length, multiply, path, slice } from "ramda";
import { and, chain, encase, fork, lastly } from "fluture";
import styled from "styled-components";
import Pagination from "../components/pagination";
import CountriesList from "../components/countriesList";
import Error from "../components/error";
import Loading from "../components/loading";
import { fetchData } from "../../API/fetchDataFn";
import COUNTRIES_QUERY from "../../API/gqlCalls/getCountries";
import Section from "../components/section";

const countriesText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
  "        tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus\n" +
  "        laoreet non curabitur gravida. Dignissim diam quis enim lobortis\n" +
  "        scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
  "        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
  "        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
  "        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" +
  "        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
  "        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
  "        officia deserunt mollit anim id est laborum.";

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

  const fetchCountries = () =>
    encase(setError)(false)
    |> and(encase(setLoading)(true))
    |> chain(fetchData(COUNTRIES_QUERY))
    |> lastly(encase(setLoading)(false))
    |> fork(() => setError(true))((res) =>
      setCountriesList(path(["data", "countries"], res))
    );

  useEffect(() => {
    fetchCountries();
  }, [setCountriesList]);

  const currentDataCount = () => {
    const firstPageIndex = multiply(currentPage - 1, itemsPerPage);
    const lastPageIndex = add(firstPageIndex, itemsPerPage);
    return countriesList |> slice(firstPageIndex, lastPageIndex);
  };

  const currentData = currentDataCount();

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Section title="Countries list" text={countriesText}>
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
              <Error onClick={() => fetchCountries()} />
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
