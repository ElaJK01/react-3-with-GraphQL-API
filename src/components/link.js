import React from "react";
import styled from "styled-components";

const LinkRoot = styled.a`
  text-decoration: none;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.3);
  :hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Link = ({ href, name }) => <LinkRoot href={href}>{name}</LinkRoot>;

export default Link;
