import { SearchStyle } from "../css/Search.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/NewsSlice";
import sea from "../assets/search.png";

const Search = () => {
  const dispatch = useDispatch();
  const { bookView } = useSelector((state) => state.posts);

  const [search, setSearch] = useState("");

  const handleReq = () => {
    dispatch(getPosts(search));
  };

  return (
    <SearchStyle>
      <div className="inp">
        {bookView ? (
          <input
            placeholder="Search Saved Posts"
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          <input
            placeholder="Search Feed"
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
      </div>
      <div className="search">
        <div className="searchbox">
          <img src={sea} onClick={handleReq} />
        </div>
      </div>
    </SearchStyle>
  );
};

export default Search;
