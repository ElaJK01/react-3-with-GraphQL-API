import React, { useEffect, useState } from "react";
import {
  prop,
  sortBy,
  length,
  slice,
  multiply,
  add,
  map,
  props,
  propOr,
  path,
} from "ramda";
import Pagination from "../components/pagination";
import LanguagesList from "../components/languagesList";
import Error from "../components/error";
import Loading from "../components/loading";
import { encase, fork, and, lastly, attempt, encaseP, attemptP } from "fluture";
import styled from "styled-components";
import LANGUAGES_QUERY from "../../API/gqlCalls/getLanguages";
import { fetchData } from "../../API/fetchDataFn";

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

const Languages = () => {
  const [languagesList, setLanguagesList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const fetchLanguages = () =>
    encase(setError)(false)
    |> and(encase(setLoading)(true))
    |> and(fetchData(LANGUAGES_QUERY))
    |> lastly(encase(setLoading)(false))
    |> fork(() => setError(true))((res) =>
      setLanguagesList(path(["data", "languages"], res))
    );

  useEffect(() => {
    fetchLanguages();
  }, [setLanguagesList]);

  console.log("langList", languagesList);

  const currentDataCount = () => {
    const firstPageIndex = multiply(currentPage - 1, itemsPerPage);
    const lastPageIndex = add(firstPageIndex, itemsPerPage);
    return languagesList |> slice(firstPageIndex, lastPageIndex);
  };

  const currentData = currentDataCount();

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Section>
        <SectionTitle>Languages list</SectionTitle>
        <div>
          {!loading && !error && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={length(languagesList)}
              paginate={handlePaginate}
              currentPage={currentPage}
              adjacentPages={3}
            />
          )}
          {error && (
            <SectionState>
              <Error onClick={() => fetchLanguages()} />
            </SectionState>
          )}
          {loading ? (
            <SectionState>
              <Loading />
            </SectionState>
          ) : (
            !error && <LanguagesList list={currentData} />
          )}
        </div>
      </Section>
    </div>
  );
};

export default Languages;
