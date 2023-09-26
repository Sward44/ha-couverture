import React, { useContext, useState } from "react";
import FormAdd from "../../components/form/FormAdd";
import { itemData } from "../../components/data/DataDiaporama";
import { contextDevice } from "../../components/context/contextMobile";
import Diaporama from "./componants/Diaporama";
import DiaporamaMobile from "./componants/DiaporamaMobile";

function HomePage() {
  const Device = useContext(contextDevice);
  const items = itemData;
  const [addForm, setAddForm] = useState(false);

  const handleForm = () => {
    setAddForm(!addForm);
  };

  return (
    <>
      {Device.isMobile && <DiaporamaMobile handleForm={handleForm} />}

      {Device.isDesktop && <Diaporama handleForm={handleForm} />}
      {addForm && <FormAdd handleForm={handleForm} />}
    </>
  );
}

export default HomePage;
