import styles from "./Texte.module.scss";

function Texte({ items, index }) {
  return (
    <div key={index} className="flexFill">
      <h2 className={`${styles.apparitionTitre} mb-20`}>
        {items[index].logo} {items[index].categorie}
      </h2>
      <p className={`${styles.apparitionTexte}`}>{items[index].description}</p>
    </div>
  );
}

export default Texte;
