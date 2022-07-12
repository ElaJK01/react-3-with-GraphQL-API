import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Languages from "./pages/languages";
import Countries from "./pages/countries";
import Layout from "./components/layout";
import LanguageDetails from "./pages/languageDetails";
import CountryDetails from "./pages/countryDetails";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/countries" component={Countries} />
          <Route exact path="/languages" component={Languages} />
          <Route path="/languages/:code" component={LanguageDetails} />
          <Route path="/countries/:code" component={CountryDetails} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
