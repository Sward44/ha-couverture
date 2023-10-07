import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ImageButton.module.scss";

function ImageButton({
  items,
  index,
  handleNext,
  handlePrev,
  handleEveryImage,
}) {
  return (
    <>
      <button onClick={handleNext} className="button-gauche">
        <FontAwesomeIcon icon={faAngleLeft} size="2xl" />
      </button>
      <button onClick={handlePrev} className="button-droite">
        <FontAwesomeIcon icon={faAngleRight} size="2xl" />
      </button>
      <div className="containeurButtonIcon dFlex justify-around">
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
