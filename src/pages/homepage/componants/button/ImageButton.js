import styles from "./ImageButton.module.scss";
import style from "../diaporama/Diaporama";

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
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button onClick={handlePrev} className="button-droite">
        <i className="fa-solid fa-angle-right"></i>
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
