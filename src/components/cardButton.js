import React from "react";
import styled from "styled-components";

const Button = styled.a`
  color: black;
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
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 0.6rem;
    width: 50%;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 0.6rem;
    width: 35%;
  }
  @media screen and (min-width: 1201px) {
    width: 50%;
    font-size: 0.8rem;
  }
`;

const CardButton = ({ link }) => <Button href={link}>More Info</Button>;

export default CardButton;
