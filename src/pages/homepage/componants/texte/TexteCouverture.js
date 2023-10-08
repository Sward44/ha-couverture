import { useState, useRef } from "react";
import styles from "./TexteCouverture.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { couverture } from "../../../../components/data/DataDiaporama";

function TexteCouverture() {
  const [accordion, setAccordion] = useState(0);
  const ref = useRef(null);

  const handleAccordion = (i) => {
    if (i !== accordion) {
      setAccordion(null);
    }
    setAccordion(i);
  };

  return (
    <div className={`${styles.containeurImage} `}>
      {couverture.map((i, index) => {
        return (
          <div key={index} className={`${styles.accordion}`}>
            <div
              onClick={() => handleAccordion(index)}
              className={`${styles.accordionPanel}`}
            >
              <div className={styles.accordionHeader}>
                <h3 id={`panel${index}Header`}>
                  <button
                    className={styles.accordionTrigger}
                    aria-controls={`panel${index}Content`}
                    aria-expanded={index === accordion ? "true" : "false"}
                  >
                    {i.titre}{" "}
                  </button>
                </h3>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  size="xl"
                  rotation={index !== accordion ? 180 : 0}
                  style={{ transition: "0.5s" }}
                  aria-hidden="true"
                />
              </div>
              <div
                className={styles.accordionContent}
                id={`panel${index}Content`}
                aria-labelledby={`panel${index}Header`}
                aria-hidden={index === accordion ? "false" : "true"}
                role="region"
              >
                {i.texte}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TexteCouverture;

// className={
//                     index !== accordion
//                       ? styles.accordion
//                       : styles.accordionActive
//                   }
