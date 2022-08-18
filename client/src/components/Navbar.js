import { Nav } from "../css/Navbar.styled";
import hamburg from "../assets/burg.png";
import { useDispatch } from "react-redux";
import { changeTheme, bookView } from "../features/NewsSlice";

import bookmark from "../assets/bookmark.png";

const Navbar = () => {
  const dispatch = useDispatch();

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
    <Nav>
      <div className="logo">
        <h1>Your Feed</h1>
      </div>

      <div className="links">
        <img src={hamburg} onClick={themeChange} />
        <img src={bookmark} onClick={changeView} />
      </div>

      <button className="always" onClick={toTop}>
        Top
      </button>
    </Nav>
  );
};

export default Navbar;
