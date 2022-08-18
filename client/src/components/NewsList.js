import React from "react";
import { List } from "../css/NewsList.styled";
import NewsItem from "./NewsItem";
import { useSelector } from "react-redux";
import LocalNews from "./LocalNews";

const NewsList = () => {
  const { bookView } = useSelector((state) => state.posts);
  return <List>{bookView ? <LocalNews /> : <NewsItem />}</List>;
};

export default NewsList;
