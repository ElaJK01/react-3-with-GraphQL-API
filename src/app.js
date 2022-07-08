import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Players from "./pages/players";
import Teams from "./pages/teams";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/teams" component={Teams} />
      </Switch>
    </div>
  );
}

export default App;
