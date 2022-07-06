import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import { footerLinks } from "../constants";

const links = footerLinks;

const NavigationWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <NavigationWrapper>
      <main>{children}</main>
      <Footer linksList={links} />
    </NavigationWrapper>
  </>
);

export default Layout;
