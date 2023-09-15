import styles from "./Localisation.module.scss";
function Localisation() {
  return (
    <div className={`d-flex justify-content-center`}>
      <div className={`flex-fill fond`}>
        <h2>Localisation</h2>
      </div>
      <div className={` imageContaineur`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43433.86312615632!2d-1.7221846513671877!3d47.12618780000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480595f6b60061af%3A0x617c503313c0d27!2sHA%20Couverture%20-%20Artisan%20Couvreur%20Charpentier!5e0!3m2!1sen!2sfr!4v1693322411207!5m2!1sen!2sfr"
          width={732}
          height={500}
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Localisation;
