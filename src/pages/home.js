import React, { useEffect, useState } from "react";
import { and, chain, encase, fork, lastly } from "fluture";
import { path } from "ramda";
import styled from "styled-components";
import Section from "../components/section";
import { fetchData } from "../../API/fetchDataFn";
import CONTINENTS_QUERY from "../../API/gqlCalls/getContinents";
import ContinentsList from "../components/continentsList";
import Error from "../components/error";
import Loading from "../components/loading";

const homeText =
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

const Home = () => {
  const [continentsList, setContinentsList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchContinents = () =>
    encase(setError)(false)
    |> and(encase(setLoading)(true))
    |> chain(fetchData(CONTINENTS_QUERY))
    |> lastly(encase(setLoading)(false))
    |> fork(() => setError(true))((res) =>
      setContinentsList(path(["data", "continents"], res))
    );

  useEffect(() => {
    fetchContinents();
  }, [setContinentsList]);

  return (
    <div>
      {error && (
        <SectionState>
          <Error onClick={() => fetchContinents()} />
        </SectionState>
      )}
      {loading ? (
        <SectionState>
          <Loading />
        </SectionState>
      ) : (
        <Section
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          text={homeText}
        >
          <ContinentsList list={continentsList} />
        </Section>
      )}
    </div>
  );
};

export default Home;
