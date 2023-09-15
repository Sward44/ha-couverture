import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

function Nav() {
  const [phone, setPhone] = useState(false);

  return (
    <>
      <ul
        className={`d-flex flex-row m-20 align-items-center ${styles.relatif}`}
      >
        <Link to="/certification" className="mr-20">
          <h3>Certifications</h3>
        </Link>
        <Link to="/blogs" className="mr-20">
          <h3>Blogs</h3>
        </Link>
        <Link to="/clients" className="mr-20">
          <h3>Avis clients</h3>
        </Link>
        <Link to="/rejoindre" className="mr-85">
          <h3>Nous rejoindre</h3>
        </Link>

        <a href="tel:+33634266400" target="_blank " rel="noopener noreferrer">
          <div
            // onMouseLeave={handleOut}
            // onMouseEnter={() => setPhone(false)}
            className={`d-flex flex-row no-wrap mr-20 align-items-center justify-content-center ${styles.paragraphe}`}
          >
            <i className={`fa-solid fa-phone ${styles.taille}`} />
            <p className={`mr-10 `}>06 34 26 64 00</p>
          </div>
        </a>

        <Link to="/localisation">
          <button>
            <i class="fa-solid fa-location-dot" />
          </button>
        </Link>
      </ul>
    </>
  );
}

export default Nav;
