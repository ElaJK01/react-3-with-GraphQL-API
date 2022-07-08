import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Home from "./pages/home";
import App from "./app";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./styles.css";
import Teams from "./pages/teams";
import Players from "./pages/players";
import Layout from "./components/layout";
import client from "./clientGraphQL";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
