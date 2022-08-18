import { SearchStyle } from "../css/Search.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts, filterPost } from "../features/NewsSlice";
import sea from "../assets/search.png";

import { useEffect } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const { bookView, savedPosts } = useSelector((state) => state.posts);

  const [search, setSearch] = useState("");

  const handleReq = () => {
    dispatch(getPosts(search));
  };

  const handleFilter = (val) => {
    const filtArr = savedPosts.payload.filter((post) => {
      return post.title.toLowerCase().includes(val.toLowerCase());
    });
    dispatch(filterPost(filtArr));
  };

  return (
    <SearchStyle>
      <div className="inp">
        {bookView ? (
          <input
            placeholder="Search Saved Posts"
            onChange={(e) => handleFilter(e.target.value)}
          />
        ) : (
          <input
            placeholder="Search Feed"
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
      </div>
      {!bookView ? (
        <div className="search">
          <div className="searchbox">
            <img src={sea} onClick={handleReq} />
          </div>
        </div>
      ) : null}
    </SearchStyle>
  );
};

export default Search;
