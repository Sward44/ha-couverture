import React, { useContext, useState } from "react";
import FormAdd from "../../components/form/FormAdd";
import { itemData } from "../../components/data/DataDiaporama";
import Diaporama from "./componants/diaporama/Diaporama";
import Texte from "./componants/texte/Texte";
import TexteButton from "./componants/button/TexteButton";
import { contextDevice } from "../../components/context/contextDevice";

function HomePage() {
  const Device = useContext(contextDevice);
  const items = itemData;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("image-gauche");
  const [addForm, setAddForm] = useState(false);

  const handleNext = () => {
    const handleNext = index - 1;
    if (handleNext < 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(handleNext);
    }
    setDirection("image-gauche");
  };

  const handlePrev = () => {
    setIndex((index + 1) % items.length);
    setDirection("image-droite");
  };

  const childFactory = (direction) => (child) =>
    React.cloneElement(child, {
      classNames: direction,
    });

  const handleEveryImage = (a) => {
    if (a > index) {
      setIndex(a);
      setDirection("image-droite");
    } else if (a < index) {
      setIndex(a);
      setDirection("image-gauche");
    }
  };

  const handleForm = () => {
    setAddForm(!addForm);
  };

  return (
    <>
      <div
        className={`containeur dFlex ${
          !Device.isDesktop && `flexColumnReverse`
        } justifyContentCenter `}
      >
        <div className={`containeurTexte dFlex flexColumn  px-20 py-50`}>
          <Texte items={items} index={index} />
          <TexteButton handleForm={handleForm} />
        </div>

        <Diaporama
          items={items}
          index={index}
          direction={direction}
          handleNext={handleNext}
          handlePrev={handlePrev}
          childFactory={childFactory}
          handleEveryImage={handleEveryImage}
        />
      </div>
      {addForm && <FormAdd handleForm={handleForm} />}
    </>
  );
}

export default HomePage;
