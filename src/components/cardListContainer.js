import React, { useMemo } from "react";
import { map, nth, zip } from "ramda";
import Card from "./card";
import styled from "styled-components";

const CardList = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

const CardListContainer = ({ imgList, cardButtonLinks }) => {
  const zippedPhotosAndLinks = useMemo(
    () => zip(imgList, cardButtonLinks),
    [imgList, cardButtonLinks]
  );
  return (
    <CardList>
      {map(
        (i) => (
          <Card key={i} img={nth(0, i)} link={nth(-1, i)} />
        ),
        zippedPhotosAndLinks
      )}
    </CardList>
  );
};

export default CardListContainer;
