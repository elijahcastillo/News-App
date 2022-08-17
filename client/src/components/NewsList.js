import React from "react";
import { List } from "../css/NewsList.styled";
import NewsItem from "./NewsItem";

const NewsList = () => {
  return (
    <List>
      <NewsItem />
    </List>
  );
};

export default NewsList;
