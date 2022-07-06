import React, { useState } from "react";
import { indexOf, map, prop } from "ramda";
import Modal from "./modal";
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

const PersonsList = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ListRoot>
      {list
        |> map((el) => (
          <Card key={indexOf(el, list)}>
            <CardContent>
              <CardTitle>
                {prop("name", el)} {prop("surname", el)}
              </CardTitle>
              <div
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: "lightgreen",
                }}
              />

              <p>
                Score:
                {prop("score", el)}
              </p>
              <CardText>
                Description:
                {prop("description", el)}
              </CardText>
              <CardButton onClick={() => setShowModal(true)}>
                Details
              </CardButton>
              {showModal && (
                <Modal
                  message={
                    <div>
                      <h5>Personal Details</h5>
                      <div>
                        <h5>
                          {prop("name", el)} {prop("surname", el)}
                        </h5>
                        <p>{prop("description", el)}</p>
                        <ModalText>
                          ed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam eaque ipsa, quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt,
                          explicabo. Nemo enim ipsam voluptatem, quia voluptas
                          sit, aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos, qui ratione voluptatem
                          sequi nesciunt, neque porro quisquam est, qui dolorem
                          ipsum, quia dolor sit, amet, consectetur
                        </ModalText>
                      </div>
                    </div>
                  }
                  handleCloseModal={() => setShowModal(false)}
                />
              )}
            </CardContent>
          </Card>
        ))}
    </ListRoot>
  );
};

export default PersonsList;
