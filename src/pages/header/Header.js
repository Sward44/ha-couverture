import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Nav from "./nav/Nav";

function Header() {
  return (
    <header>
      <div className="d-flex flex-row flex-fill m-10">
        <div className="dflex flex-fill">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
