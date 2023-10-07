import { useState, useEffect, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Logo from "../logo/Logo";
import Nav from "./nav/Nav";
import NavBurger from "./nav/NavBurger";
import LogoFooter from "../logo/LogoFooter";
import { contextDevice } from "../../components/context/contextDevice";

function Header() {
  const Device = useContext(contextDevice);
  const [y, setY] = useState(window.scrollY);
  const [scroll, setScroll] = useState(true);
  const ref = useRef(null);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY && y > 105) {
        setScroll(true);
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        setScroll(false);
        console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <CSSTransition
      in={scroll}
      nodeRef={ref}
      timeout={300}
      unmountOnExit
      classNames="stickyNav"
    >
      <header>
        <div ref={ref}>
          <div
            className={`dFlex flexRow  ${
              Device.isMobile ? `py-5 px-10` : `p-10`
            }`}
          >
            <div className="dFlex flexFill align-items-center">
              <Link to="/">
                {Device.isMobile && <LogoFooter />}{" "}
                {Device.isTablet ||
                  Device.isLaptop ||
                  (Device.isDesktop && <Logo />)}
              </Link>
            </div>
            <Nav />
            <NavBurger />
          </div>
        </div>
      </header>
    </CSSTransition>
  );
}

export default Header;
