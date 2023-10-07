import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { contextDevice } from "../../../components/context/contextDevice";

function Nav() {
  const Device = useContext(contextDevice);
  const [phone, setPhone] = useState(false);

  return (
    <>
      <ul
        className={`dFlex flexRow ${
          Device.isMobile ? "" : "m-20"
        } alignItemsCenter ${styles.relatif}`}
      >
        <div className={`${styles.displayFlex} flexRow nav-link`}>
          <Link to="/blogs" className={`mr-20 `}>
            <h3>Blogs</h3>
          </Link>
          <Link to="/clients" className="mr-20">
            <h3>Avis clients</h3>
          </Link>
          <Link to="/rejoindre" className="mr-85">
            <h3>Nous rejoindre</h3>
          </Link>
        </div>
        <a href="tel:+33634266400" target="_blank " rel="noopener noreferrer">
          <div
            // onMouseLeave={handleOut}
            // onMouseEnter={() => setPhone(false)}
            className={`dFlex flexRow no-wrap mr-20 alignItemsCenter justifyContentCenter ${styles.paragraphe}`}
          >
            <FontAwesomeIcon icon={faPhone} className={styles.taillePhone} />
            {Device.isMobile ? "" : <p className={`mr-10 `}>06 34 26 64 00</p>}
          </div>
        </a>
        <Link to="/localisation">
          <button className={Device.isMobile && styles.displayButton}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.tailleLocation}
            />
          </button>
        </Link>
      </ul>
    </>
  );
}

export default Nav;
