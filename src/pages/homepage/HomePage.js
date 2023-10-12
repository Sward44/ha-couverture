import React, { useContext, useState } from "react";
import FormAdd from "../../components/form/FormAdd";
import { itemData } from "../../components/data/DataDiaporama";
import Diaporama from "./componants/diaporama/Diaporama";
import Texte from "./componants/texte/Texte";
import TexteButton from "./componants/button/TexteButton";
import { contextDevice } from "../../components/context/contextDevice";
import TexteCouverture from "./componants/texte/TexteCouverture";
import styles from "./HomePage.module.scss";
import Header from "../header/Header";

function HomePage() {
  const Device = useContext(contextDevice);
  const items = itemData;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("imageGauche");
  const [addForm, setAddForm] = useState(false);

  const handleNext = () => {
    const handleNext = index - 1;
    if (handleNext < 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(handleNext);
    }
    setDirection("imageGauche");
  };

  const handlePrev = () => {
    setIndex((index + 1) % items.length);
    setDirection("imageDroite");
  };

  const childFactory = (direction) => (child) =>
    React.cloneElement(child, {
      classNames: direction,
    });

  const handleEveryImage = (a) => {
    if (a > index) {
      setIndex(a);
      setDirection("imageDroite");
    } else if (a < index) {
      setIndex(a);
      setDirection("imageGauche");
    }
  };

  const handleForm = () => {
    setAddForm(!addForm);
  };

  return (
    <>
      <div
        className={`${styles.containeur} ${
          Device.isLargeDesktop && styles.shadowScale
        } dFlex ${
          !Device.isLargeDesktop && `flexColumnReverse`
        } justifyContentCenter `}
      >
        {Device.isMobile && <Header />}
        <div className={`${styles.containeurTexte} dFlex flexColumn`}>
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
{
  /* <div className={`${styles.containeur} dFlex justifyContentCenter `}>
        <TexteCouverture />
      </div> */
}
