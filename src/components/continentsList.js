import React from "react";
import { map, prop } from "ramda";
import styled from "styled-components";

const ListRoot = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  box-sizing: border-box;
  flex-basis: 30%;
`;

const CardContent = styled.div`
  padding: 2px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  margin-left: 5px;
`;

const CardTitle = styled.h4`
  margin: 0.5em;
  padding: 0;
`;

const CardButton = styled.a`
  text-decoration: none;
  background: whitesmoke;
  border-style: none;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 30%;
  color: gray;
  font-size: 10px;
  text-align: center;

  :hover {
    background: white;
    color: black;
  }
`;

const CardDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightseagreen;
`;

const ContinentsList = ({ list }) => (
  <ListRoot>
    {list
      |> map((el) => (
        <Card key={prop("code", el)}>
          <CardContent>
            <CardTitle>{prop("name", el)}</CardTitle>
            <CardDiv />
            <p>
              Code:
              {prop("code", el)}
            </p>
            <CardButton href={`/continents/${prop("code", el)}`}>
              Details
            </CardButton>
          </CardContent>
        </Card>
      ))}
  </ListRoot>
);

export default ContinentsList;
