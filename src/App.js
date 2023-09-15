import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import FormAdd from "./components/form/FormAdd";

function App() {
  // const [popup, setPopup] = useState(false);

  // function handlePopup() {
  //   setPopup(false);
  // }

  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      {/* {popup && <FormAdd />} */}
      <Footer></Footer>
    </>
  );
}

export default App;
