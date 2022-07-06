import React, { useState } from "react";
import { indexOf, map, prop } from "ramda";
import Modal from "./modal";
import styled from "styled-components";

const ListContainer = styled.div`
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
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  box-sizing: border-box;
  flex-basis: 30%;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
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

const CardText = styled.p`
  font-size: 10px;
`;

const CardButton = styled.button`
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

const ModalText = styled.p`
  display: inline;
  text-align: justify;
  margin: 5px;
  font-size: 10px;
`;

const TeamsList = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ListContainer>
      {list
        |> map((el) => (
          <Card key={indexOf(el, list)}>
            <CardContent>
              <CardTitle> {prop("teamName", el)}</CardTitle>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: 200,
                  height: "fit-content",
                  backgroundColor: "yellow",
                  fontSize: 10,
                }}
              >
                <h5>Team players</h5>
                <ul style={{ listStyleType: "none" }}>
                  {map((i) => {
                    const name = prop("name", i);
                    const surname = prop("surname", i);
                    return (
                      <li key={indexOf(i, prop("teamPlayers", el))}>
                        {name} {surname}
                      </li>
                    );
                  }, prop("teamPlayers", el))}
                </ul>
              </div>
              <CardText>
                Description:
                {prop("description", el)}
              </CardText>
              <CardButton onClick={() => setShowModal(true)}>
                Details
              </CardButton>
            </CardContent>
            {showModal && (
              <Modal
                message={
                  <ModalText>
                    <h5>Players</h5>
                    <div>
                      <ul style={{ listStyleType: "none" }}>
                        {map((i) => {
                          const name = prop("name", i);
                          const surname = prop("surname", i);
                          return (
                            <li>
                              {name} {surname}
                            </li>
                          );
                        }, prop("teamPlayers", el))}
                      </ul>
                    </div>
                  </ModalText>
                }
                handleCloseModal={() => setShowModal(false)}
              />
            )}
          </Card>
        ))}
    </ListContainer>
  );
};

export default TeamsList;
