import { SearchStyle } from "../css/Search.styled";
import sea from "../assets/search.png";

const Search = () => {
  return (
    <SearchStyle>
      <div className="inp">
        <input placeholder="Search Feed" />
      </div>
      <div className="search">
        <div className="searchbox">
          <img src={sea} />
        </div>
      </div>
    </SearchStyle>
  );
};

export default Search;
