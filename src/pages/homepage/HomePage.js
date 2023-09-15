import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Couverture from "../../assets/img/Couverture";
import Zinguerie from "../../assets/img/Zingerie";
import Isolation from "../../assets/img/Isolation";

function HomePage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("image-gauche");

  const items = [
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/04/banner-couverture-banner-732x510-c-default.webp",
      title: "Image 1",
      categorie: "Couverture",
      logo: Couverture(),
      description:
        "Pour une couverture de toit durable et esthétiquement plaisante à Nantes, faites confiance à notre expertise en matériaux de qualité et techniques éprouvées. Contactez-nous dès aujourd'hui pour un devis gratuit et découvrez pourquoi nous sommes votre choix numéro un en rénovation et création de toitures dans la région.",
    },
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/05/couv-zinguerie-732x510-c-default.webp",
      title: "Image 2",
      categorie: "Zinguerie",
      logo: Zinguerie(),
      description:
        "Évitez les problèmes d'infiltration d'eau et valorisez votre maison à Nantes avec notre service de récupération de toit dans des gouttières de haute qualité. Contactez-nous pour un devis gratuit et découvrez comment notre expertise en gouttières durables et éco-responsables fait toute la différence.",
    },
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/05/couv-zinguerie-732x510-c-default.webp",
      title: "Image 3",
      categorie: "Nettoyage",
      logo: "",
      description:
        "Redonnez éclat et longévité à votre domicile avec notre service spécialisé en nettoyage de toitures et murs à Nantes. Ne laissez pas les mousses et les algues dégrader votre bien immobilier ; contactez-nous dès maintenant pour un devis gratuit et bénéficiez de notre expertise reconnue dans la région.",
    },
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/05/couv-zinguerie-732x510-c-default.webp",
      title: "Image 4",
      categorie: "Isolation",
      logo: Isolation(),
      description:
        "Redonnez éclat et longévité à votre domicile avec notre service spécialisé en nettoyage de toitures et murs à Nantes. Ne laissez pas les mousses et les algues dégrader votre bien immobilier ; contactez-nous dès maintenant pour un devis gratuit et bénéficiez de notre expertise reconnue dans la région.",
    },
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/05/couv-zinguerie-732x510-c-default.webp",
      title: "Image 5",
      categorie: "Charpente",
      logo: "",
      description:
        "Redonnez éclat et longévité à votre domicile avec notre service spécialisé en nettoyage de toitures et murs à Nantes. Ne laissez pas les mousses et les algues dégrader votre bien immobilier ; contactez-nous dès maintenant pour un devis gratuit et bénéficiez de notre expertise reconnue dans la région.",
    },
    {
      img: "https://www.ed-ouest.fr/app/uploads/2022/10/professionnel-toit-732x510-c-default.webp",
      title: "Image 3",
      categorie: "Réparation diverses",
      logo: "",
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
    setDirection("image-droite");
  };

  const handlePrev = () => {
    setIndex((index + 1) % items.length);
    setDirection("image-gauche");
  };

  const childFactory = (direction) => (child) =>
    React.cloneElement(child, {
      classNames: direction,
    });

  return (
    <>
      <div className={`d-flex justify-content-center fondImage`}>
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
          <button>
            <h3>Demande de devis</h3>
          </button>
        </div>
        <div className={` imageContaineur containeur`}>
          <button onClick={handleNext} className="button-gauche">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button onClick={handlePrev} className="button-droite">
            <i className="fa-solid fa-angle-right"></i>
          </button>
          <div className="div">
            <TransitionGroup childFactory={childFactory(direction)}>
              <CSSTransition
                key={items[index].img}
                timeout={800}
                classNames={direction}
              >
                {/* <div className={` ${styles.titre}`}>
                <h2>{items[index].title}</h2>
              </div> */}
                <img src={items[index].img} />
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className=" d-flex justify-around">
          <button>
            <Couverture />
          </button>
          <button>
            <Zinguerie />
          </button>
          <button>
            <Isolation />
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
