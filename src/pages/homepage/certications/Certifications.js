import React, { useState } from "react";
import styles from "./Certifications.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Certifications() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("imageGauche");

  const items = [
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/04/banner-couverture-banner-732x510-c-default.webp",
      title: "Image 1",
      categorie: "Couverture",
      description: "revbstrhbtdnht nty dnbtndty ytyt tdbtd",
    },
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/05/couv-zinguerie-732x510-c-default.webp",
      title: "Image 2",
      categorie: "Zinguerie",
      description: "revbstrhbtdnht nty dnbtndty ytyt tdbtd",
    },
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/10/professionnel-toit-732x510-c-default.webp",
      title: "Image 3",
      categorie: "Amélioration de l'habitat",
      description: "revbstrhbtdnht nty dnbtndty ytyt tdbtd",
    },
  ];

  const handleNext = () => {
    const handleNext = index - 1;
    if (handleNext < 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(handleNext);
    }
    setDirection("imageDroite");
  };

  const handlePrev = () => {
    setIndex((index + 1) % items.length);
    setDirection("imageGauche");
  };

  const childFactory = (direction) => (child) =>
    React.cloneElement(child, {
      classNames: direction,
    });

  return (
    <div className={` imageContaineur ${styles.containeur}`}>
      <button onClick={handleNext} className={`buttonGauche`}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button onClick={handlePrev} className={`buttonDroite`}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
      <TransitionGroup childFactory={childFactory(direction)} className={`div`}>
        <CSSTransition
          key={items[index].img}
          timeout={10000}
          classNames={direction}
        >
          {/* <div className={` ${styles.titre}`}>
                <h2>{items[index].title}</h2>
              </div> */}
          <img src={items[index].img} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Certifications;
