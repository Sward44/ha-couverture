import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FaStar } from "react-icons/fa";
import styles from "./Clients.module.scss";
import { useState } from "react";

function Clients() {
  const [reviews, setReviews] = useState([
    {
      google_id: "",
      author_link: "",
      author_title: "Frédérique Calixte",
      author_first_name: "F.",
      author_last_name: "Calixte",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Je recommande complètement !",
      review_text:
        "J'ai fait appel initialement à cette entreprise dans le cadre d'une procédure compliquée et elle a été la seule à établir un macro-devis, à expliquer les travaux et à me donner de précieux conseils. Je leur ai également confié des travaux d'entretien de toiture, qui ont été réalisés très rapidement, toujours avec des explications et avec le sourire. Je recommande vivement cette entreprise !",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1694672308,
      review_datetime_utc: "14/09/2023 08:18:28",
      review_likes: false,
      review_lieux: "Saint Philbert de Grand Lieu",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Sifen Bouyer",
      author_first_name: "S.",
      author_last_name: "Bouyer",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Super boulot soigné ",
      review_text:
        "Très bonne artisan très soigné sur le contact client et le boulot, rapide et professionnel conseillé.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1693643888,
      review_datetime_utc: "02/09/2023 10:38:08",
      review_likes: false,
      review_lieux: "Nantes",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Michael Lammens",
      author_first_name: "M.",
      author_last_name: "Lammens",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Très bon travail",
      review_text:
        "J'ai demandé à achat couverture de refaire ma toiture elle était très fatiguée une Baptiste de 110 ans bonne réalisation très bon travail elle est comme neuve merci à vous.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1693582688,
      review_datetime_utc: "01/09/2023 17:38:08",
      review_likes: false,
      review_lieux: "Pornic",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "",
      author_first_name: "",
      author_last_name: "",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Bon accueil à une demande inhabituelle",
      review_text:
        "Demande de pose d'un raccord entre un réservoir d'eau de pluie et une gouttière en zinc, avec facture mentionnant l'habilitation professionnelle avec garantie / assurance dommages demandée par le syndic. Après visite sur place et devis, il a été admis que je pouvais réaliser moi-même la pose.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer:
        "Merci pour votre commentaire L'équipe Ha Couverture à votre service.",
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 4,
      review_timestamp: 1655882375,
      review_datetime_utc: "22/06/2022 09:19:35",
      review_likes: false,
      review_lieux: "",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Vincent Mala",
      author_first_name: "V.",
      author_last_name: "Mala",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Intervention rapide",
      review_text:
        "J'ai fait appel à cette entreprise pendant une urgence lors d'une tempête en effet mon toit fuyait beaucoup l'eau j'ai cherché rapidement une entreprise qui pouvait intervenir tout de suite cette entreprise a répondu très rapidement à ma demande ils sont intervenus dans la journée pour régler mon problème et ensuite changer mes tuiles qui était défectueuse et ainsi combler ma fuite je suis très content de la rapidité et de la prestation de cette entreprise. Je recommande.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1629113697,
      review_datetime_utc: "16/08/2021 13:34:57",
      review_likes: false,
      review_lieux: "Nantes",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Eric Souchet",
      author_first_name: "E.",
      author_last_name: "Souchet",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Efficacité  rapidité  qualité",
      review_text:
        "J'ai fait appel à cette entreprise pour une rénovation complète de maison extérieur: traitement hydrofuge toit ardoises,peinture toit, peinture complète façade,appui de fenêtre, habillage de cheminée en ardoise remise en place de faîtage. Rien à dire travail parfait et prix très avantageux. De vrais professionnels avec le sourire en plus!",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1623511658,
      review_datetime_utc: "12/06/2021 17:27:38",
      review_likes: false,
      review_lieux: "Nantes",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Lidia Albert",
      author_first_name: "L.",
      author_last_name: "Albert",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Excellent travail",
      review_text:
        "Très contente de leur travail. Très pro, de très bon conseil et sérieux. Un grand merci pour leur professionnalisme et leur travail. In recommande vivement. ",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1622225962,
      review_datetime_utc: "28/05/2021 20:19:22",
      review_likes: false,
      review_lieux: "Saint Aignan de Grandlieu",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Maëla Robic",
      author_first_name: "M.",
      author_last_name: "Robic",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Expertise et conseils honnêtes",
      review_text:
        "J'ai fait appel à HA Couverture pour une toiture de 40 ans qui avait travaillée ! Ils m'ont expliqué de manière simple et proposé plusieurs solutions en prenant en compte mes contraintes. A moi, de décider quels travaux je souhaite engager auprès d'eux ! ",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1620714270,
      review_datetime_utc: "11/05/2021 08:24:30",
      review_likes: false,
      review_lieux: "Bouaye",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Sandy Michelet",
      author_first_name: "S.",
      author_last_name: "Michelet",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Très satisfait",
      review_text:
        "J ai fait appel à cet entreprise et je suis très satisfaite de leur travail propre et soignée je recommende a toute personne vraiment pas déçu.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1616599936,
      review_datetime_utc: "24/03/2021 16:32:16",
      review_likes: false,
      review_lieux: "Nantes",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Laurent Rozo",
      author_first_name: "L.",
      author_last_name: "Rozo",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Travail soigné",
      review_text: "Le travail effectué est soigné.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 4,
      review_timestamp: 1592070849,
      review_datetime_utc: "13/06/2020 19:54:09",
      review_likes: false,
      review_lieux: "Nantes",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Sebastien Anese",
      author_first_name: "S.",
      author_last_name: "Anese",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Parfait",
      review_text:
        "Renovation complete d'une toiture sur Nantes. Travail soigné.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1591375309,
      review_datetime_utc: "05/06/2020 18:41:49",
      review_likes: false,
      review_lieux: "Bouguenais",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Association de danse",
      author_first_name: "",
      author_last_name: "",
      author_entreprise_bolean: true,
      author_entreprise: "Association de danse",
      author_id: "",
      author_image: "",
      review_title: "rapidité",
      review_text:
        "entreprise très réactive, est intervenue dans le délai des 2 heures; Ouvrier compétent, ne pousse pas à la consommation.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1573673678,
      review_datetime_utc: "13/11/2019 20:34:38",
      review_likes: false,
      review_lieux: "Saint Nazaire",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "Arnaud Girardin",
      author_first_name: "A.",
      author_last_name: "Girardin",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Un service au top !!!",
      review_text:
        "J'ai fait appel à cette société suite à une urgence (fuite sur plafond / sous toiture) Ils sont venus en 2h, ont fait le diagnostic et vont m'envoyer les devis. Très honnêtes car ne cherchent pas à alourdir les travaux. Ils ne m'ont rien demandé pour ce déplacement considérant qu'il s'agissait d'un diagnostic et non d'une intervention même s'ils m'ont débouché une noue. Service client au top! Bravo.",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1573194148,
      review_datetime_utc: "08/11/2019 07:22:28",
      review_likes: false,
      review_lieux: "Carquefou",
    },
    {
      google_id: "",
      author_link: "",
      author_title: "",
      author_first_name: "",
      author_last_name: "",
      author_entreprise_bolean: false,
      author_entreprise: "",
      author_id: "",
      author_image: "",
      review_title: "Intervention très rapide !",
      review_text:
        "Nous avons fait appel à Santiago Couverture en urgence. 45 minutes après ils étaient chez nous pour intervenir ! Réactivité et efficacité sont donc au rdv ! Merci beaucoup !",
      review_img_url: "",
      owner_reponse: false,
      owner_answer: null,
      owner_answer_timestamp: null,
      owner_answer_timestamp_datetime_utc: null,
      review_link: "",
      review_rating: 5,
      review_timestamp: 1572698198,
      review_datetime_utc: "02/11/2019 13:36:38",
      review_likes: false,
      review_lieux: "",
    },
  ]);
  const handleResponse = (index) => {
    setReviews(
      reviews.map((review, idx) =>
        index === idx
          ? { ...review, owner_reponse: !review.owner_reponse }
          : review
      )
    );
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <h2>Clients</h2>
      <div class="container pb-5 mb-5">
        <div class="avis_titre">
          <h2>Tous les avis</h2>
          <div class="line"></div>
        </div>

        <div className="d-flex flex-column my-20">
          <div className={`d-flex flex-row`}>
            <div>
              {reviews.map((i, indexItem) => {
                return (
                  <div key={indexItem} className={`p-20 ${styles.fondCard}`}>
                    <div className="d-flex align-items-center">
                      <div className={styles.fondStars}>
                        {[...Array(5)].map((star, indexStars) => {
                          return (
                            <FaStar
                              key={indexStars}
                              fill={
                                indexStars >= i.review_rating
                                  ? "var(--text-light)"
                                  : "var(--shining)"
                              }
                            />
                          );
                        })}
                      </div>
                      <div className="">
                        <h3>{i.review_title}</h3>
                      </div>
                    </div>
                    <div className="d-flex flex-column ml-130 pb-10">
                      <p> &#171;&nbsp;{i.review_text}&nbsp;&#187;</p>
                    </div>
                    <div className="d-flex flex-row justify-content-right pb-10">
                      <p>
                        {" "}
                        {i.author_title && !i.author_entreprise_bolean && (
                          <>
                            De {i.author_title[0]}.&nbsp;
                            {i.author_title.split(" ")[1]}
                            ,&nbsp;
                          </>
                        )}
                        {i.author_entreprise_bolean && (
                          <>{i.author_entreprise},&nbsp;</>
                        )}
                        {i.author_title ? (
                          <>le {i.review_datetime_utc.split(" ")[0]}</>
                        ) : (
                          <>Le {i.review_datetime_utc.split(" ")[0]}</>
                        )}
                        {i.review_lieux && <>,&nbsp;à {i.review_lieux}</>}
                      </p>
                    </div>

                    {i.owner_answer && (
                      <div className="d-flex flex-column ml-130 pb-20">
                        <div className="mb-20">
                          <button
                            key={indexItem}
                            onClick={() => handleResponse(indexItem)}
                            className={`px-20 ${
                              i.owner_reponse && styles.shinning
                            }`}
                          >
                            {i.owner_reponse ? (
                              <>
                                <p>Cacher la reponse...</p>
                              </>
                            ) : (
                              <p>Voir la reponse...</p>
                            )}
                          </button>
                        </div>

                        {i.owner_reponse && (
                          <div>
                            <p> &#171;&nbsp;{i.owner_answer}&nbsp;&#187;</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;

{
  /* <script>
document.addEventListener('DOMContentLoaded',function(){
    let coll = document.querySelector('#collapsible_2');
    let cont = document.querySelector('#content_2');
    let texte = document.querySelector('#reponse_2')
    
    coll.addEventListener('click', function() {
            cont.classList.toggle('active');
            if (texte.innerHTML == 'Voir la réponse') {
               texte.innerHTML = 'Cacher la réponse';
            }
            else {
                texte.innerHTML = 'Voir la réponse';
            }
    });
});
</script> */
}
