import { Nav } from "../css/Navbar.styled";
import hamburg from "../assets/burg.png";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/NewsSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const themeChange = () => {
    dispatch(changeTheme());
  };
  return (
    <Nav>
      <div className="logo">
        <h1>Your Feed</h1>
      </div>

      <div className="links">
        <img src={hamburg} onClick={themeChange} />
      </div>
    </Nav>
  );
};

export default Navbar;
