import { Nav } from "../css/Navbar.styled";
import hamburg from "../assets/burg.png";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, bookView } from "../features/NewsSlice";
import up from "../assets/up-arrow.png";
import bookmark from "../assets/bookmark.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const { savedPostsCount } = useSelector((state) => state.posts);

  const themeChange = () => {
    dispatch(changeTheme());
  };

  const changeView = () => {
    dispatch(bookView());
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Nav count={savedPostsCount.payload}>
      <div className="logo">
        <h1>Your Feed</h1>
      </div>

      <div className="links">
        <img src={hamburg} onClick={themeChange} />
        <div className="book">
          <img src={bookmark} onClick={changeView} />
        </div>
      </div>

      <img src={up} className="always" onClick={toTop}></img>
    </Nav>
  );
};

export default Navbar;
