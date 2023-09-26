import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { itemData } from "../../../components/data/DataDiaporama";
import styles from "./Diaporama.module.scss";

function DiaporamaMobile(handleForm) {
  const items = itemData;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("image-gauche");

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
    console.log(a);
    if (a > index) {
      setIndex(a);
      setDirection("image-droite");
    } else if (a < index) {
      setIndex(a);
      setDirection("image-gauche");
    }
  };

  return (
    <div className={`d-flex flex-column justify-content-center fondImage`}>
      <div className={` imageContaineur containeur mb-20`}>
        <div className=" d-flex justify-around containerImage">
          {items.map((i, indexButton) => (
            <button
              key={indexButton}
              onClick={() => handleEveryImage(indexButton)}
              className={`mx-10 ${index === indexButton && styles.shining}`}
            >
              {i.logo}
            </button>
          ))}
        </div>

        <div className="div">
          {items.map((i, index) => (
            <img src={i.imgmobile} className={`image`} />
          ))}
        </div>
      </div>
      <div className={`d-flex flex-column fond px-20 py-50`}>
        <div key={index} className="flex-fill">
          <h2 className={`${styles.apparitionTitre} mb-20`}>
            {items[index].logo} {items[index].categorie}
          </h2>
          <p className={`${styles.apparitionTexte}`}>
            {items[index].description}
          </p>
        </div>
        <div
          className={`d-flex justify-content-center align-items-center mb-20 ${styles.enSavoirPlus}`}
        >
          <FontAwesomeIcon icon={faCirclePlus} className="mr-10" />
          <p>En savoir plus...</p>
        </div>
        <button onClick={handleForm}>
          <h3>Demande de devis</h3>
        </button>
      </div>
    </div>
  );
}

export default DiaporamaMobile;
