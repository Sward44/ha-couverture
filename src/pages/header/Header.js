import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Nav from "./nav/Nav";
import NavBurger from "./nav/NavBurger";
import LogoFooter from "../logo/LogoFooter";
import { contextDevice } from "../../components/context/contextDevice";
import styles from "./Header.module.scss";

function Header() {
  const Device = useContext(contextDevice);
  // const [y, setY] = useState(window.scrollY);
  // const [scroll, setScroll] = useState(true);
  // const handleNavigation = useCallback(
  //   (e) => {
  //     const window = e.currentTarget;
  //     if (y > window.scrollY && y > 105) {
  //       setScroll(true);
  //       console.log("scrolling up");
  //     } else if (y < window.scrollY) {
  //       setScroll(false);
  //       console.log("scrolling down");
  //     }
  //     setY(window.scrollY);
  //   },
  //   [y]
  // );

  // useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  return (
    <header className={`headerBox`}>
      <div className={`largeurHeader`}>
        <div
          className={`dFlex flexRow  ${
            Device.isMobile ? `py-5 px-10` : `p-10`
          }`}
        >
          <div className={`dFlex flexFill align-items-center`}>
            <Link to="/">{Device.isMobile ? <LogoFooter /> : <Logo />}</Link>
          </div>

          {!Device.isMobile && <Nav />}
          <NavBurger />
        </div>
      </div>
    </header>
  );
}

export default Header;
