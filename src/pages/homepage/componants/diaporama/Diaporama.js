import React, { useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { contextDevice } from "../../../../components/context/contextDevice";
import ImageButton from "../button/ImageButton";
import styles from "./Diaporama.module.scss";

function Diaporama({
  items,
  index,
  direction,
  childFactory,
  handleNext,
  handlePrev,
  handleEveryImage,
}) {
  const Device = useContext(contextDevice);
  return (
    <div className={`dFlex ${styles.containeurImage}`}>
      <ImageButton
        items={items}
        index={index}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleEveryImage={handleEveryImage}
      />
      <TransitionGroup childFactory={childFactory(direction)}>
        <CSSTransition
          in={false}
          key={index}
          timeout={800}
          classNames={{ direction }}
          en
        >
          {Device.isMobile ? (
            <img src={items[index].imgmobile} className={styles.image} />
          ) : Device.isDesktop ? (
            <img src={items[index].imglaptop} className={styles.image} />
          ) : (
            <img src={items[index].img} className={styles.image} />
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Diaporama;

{
  /* <div className={` ${styles.titre}`}>
                <h2>{items[index].title}</h2>
              </div> */
}
