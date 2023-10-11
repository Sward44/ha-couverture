import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../diaporama/Diaporama.module.scss";
import { contextDevice } from "../../../../components/context/contextDevice";

function ImageButton({
  items,
  index,
  handleNext,
  handlePrev,
  handleEveryImage,
}) {
  const Device = useContext(contextDevice);
  return (
    <>
      {Device.isMobile ? (
        ""
      ) : (
        <>
          <button onClick={handleNext} className={styles.buttonGauche}>
            <FontAwesomeIcon icon={faAngleLeft} size="2xl" />
          </button>
          <button onClick={handlePrev} className={styles.buttonDroite}>
            <FontAwesomeIcon icon={faAngleRight} size="2xl" />
          </button>
        </>
      )}
      <div className={`${styles.containeurButtonIcon} dFlex justify-around`}>
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
    </>
  );
}

export default ImageButton;
