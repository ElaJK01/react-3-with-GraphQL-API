import React, { useEffect, useState } from "react";
import { add, length, map, multiply, prop, slice, sortBy } from "ramda";
import Pagination from "../components/pagination";
import CountriesList from "../components/countriesList";
import Error from "../components/error";
import Loading from "../components/loading";
import { and, encase, fork, lastly } from "fluture";
import styled from "styled-components";
import Section from "../components/section";

const LanguageDetails = () => {
  return (
    <div>
      <Section title={"Language Details"} children={message} />
    </div>
  );
};
