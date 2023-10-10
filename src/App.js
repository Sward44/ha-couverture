import { Outlet } from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import { useMediaQuery } from "react-responsive";
import { contextDevice } from "./components/context/contextDevice";
import styles from "./App.module.scss";

export default function App() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 979 });
  const isDesktop = useMediaQuery({ minWidth: 980, maxWidth: 1299 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1300 });

  return (
    <>
      <contextDevice.Provider
        value={{
          isMobile,
          isTablet,
          isLaptop,
          isDesktop,
          isLargeDesktop,
        }}
      >
        {!isMobile && <Header />}
        <main>
          <Outlet />
        </main>
        <Footer />
      </contextDevice.Provider>
    </>
  );
}
