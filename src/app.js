import React from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Languages from "./pages/languages";
import Countries from "./pages/countries";
import Layout from "./components/layout";
import LanguageDetails from "./pages/languageDetails";
import CountryDetails from "./pages/countryDetails";
import ContinentDetails from "./pages/continentDetails";

const GlobalStyle = createGlobalStyle`

  * {
    font-family: "Gill Sans", sans-serif;
    font-size: 14px;
  }

  html,
  body {
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 14px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    body {
      width: 90%;
    }

    p {
      font-size: 10px;
    }
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/countries" component={Countries} />
          <Route exact path="/languages" component={Languages} />
          <Route path="/languages/:code" component={LanguageDetails} />
          <Route path="/countries/:code" component={CountryDetails} />
          <Route path="/continents/:code" component={ContinentDetails} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
