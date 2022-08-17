import { Nav } from "../css/Navbar.styled";
import hamburg from "../assets/burg.png";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <h1>Your Feed</h1>
      </div>

      <div className="links">
        <img src={hamburg} />
      </div>
    </Nav>
  );
};

export default Navbar;
