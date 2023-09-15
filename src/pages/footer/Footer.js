import { Link } from "react-router-dom";
import LogoFooter from "../logo/LogoFooter";

function Footer() {
  return (
    <footer className="d-flex flex-row">
      <div className="d-flex flex-fill flex-column align-items-center justify-content-center">
        <div></div>

        <Link to="/">
          <LogoFooter />
        </Link>
        <p>
          2023-Copyright@
          <a
            href="https://david-launay.com"
            target="_blank "
            rel="noopener noreferrer"
          >
            David Launay
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
