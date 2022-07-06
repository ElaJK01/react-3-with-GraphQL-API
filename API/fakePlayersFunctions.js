import {
  assoc,
  flatten,
  length,
  map,
  multiply,
  nth,
  prop,
  zipObj,
} from "ramda";
import { first } from "./data";

const namesList = map(prop("name"));

const surnameList = map(prop("surname"));
const descriptionList = map(prop("description"));

const names = first |> map(namesList) |> flatten;
const surnames = first |> map(surnameList) |> flatten;
const descriptions = first |> map(descriptionList) |> flatten;

export const oneRandomName = () =>
  nth(Math.floor(multiply(Math.random(), length(names))), names);

export const oneRandomSurname = () =>
  nth(Math.floor(multiply(Math.random(), length(surnames))), surnames);

export const oneRandomPersonDescription = () =>
  nth(Math.floor(multiply(Math.random(), length(descriptions))), descriptions);

export const zipPlayerWithScore = (el) =>
  zipObj(["name", "score"], [el, Math.floor(Math.random() * 25)]);

export const addSurnameAndDescription = (el) =>
  el
  |> assoc("surname", oneRandomSurname())
  |> assoc("description", oneRandomPersonDescription());
