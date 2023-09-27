import { Outlet } from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import { useMediaQuery } from "react-responsive";
import { contextDevice } from "./components/context/contextDevice";

export default function App() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 767 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 979 });
  const isDesktop = useMediaQuery({ minWidth: 980 });

  return (
    <>
      <contextDevice.Provider
        value={{ isMobile, isTablet, isLaptop, isDesktop }}
      >
        <div
          style={{
            backgroundColor: "var(--fond-header)",
            boxShadow: "0px 2px 10px 1px var(--shadow)",
          }}
        >
          <Header />
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </contextDevice.Provider>
    </>
  );
}
