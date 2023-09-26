import { useRef } from "react";
import React, { useState } from "react";
import styles from "./FormAdd.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactCountryFlag from "react-country-flag";

function FormAdd({ handleForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState(true);
  const isFinish = useRef(false);
  const options = [
    { optionValue: "+33", valueFlag: "FR" },
    { optionValue: "+44", valueFlag: "GB" },
    { optionValue: "+1", valueFlag: "US" },
  ];
  const defaultValues = {
    email: "",
  };

  const schema = yup.object({
    email: yup
      .string()
      .required("Email obligatoire.")
      .email("Le système à detecté que votre format n'est pas conforme."),
    name: yup.string().required("Nom demandé"),
    surname: yup.string().required("Prénom demandé"),
    indicatif: yup.string(),
    number: yup.number(),
    comments: yup.string(),
  });
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  async function submit(values) {
    try {
      setIsLoading(true);
      clearErrors();
      const { _id, ...newEmailWithoutId } = values;
      newEmailWithoutId.number =
        newEmailWithoutId.indicatif + newEmailWithoutId.number;
      const response = await fetch(`https://restapi.fr/api/email`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmailWithoutId),
      });
      if (response.ok) {
        const newEmailFooter = await response.json();
        isFinish.current = true;
        reset();
      } else {
        setError("generic", {
          type: "generic",
          message: "Problèmes serveurs else",
        });
      }
    } catch (e) {
      setError("generic", {
        type: "generic",
        message: "Problèmes serveurs catch",
      });
    }
    setIsLoading(false);
  }

  return (
    <div
      className={`${styles.formulaire} d-flex flex-fill align-items-center justify-content-center`}
    >
      {isLoading && (
        <i
          className={`fa-solid fa-spinner fa-spin-pulse ${styles.loadingSpin}`}
        ></i>
      )}
      {isFinish.current ? (
        <div
          className={`${styles.containerFormulaire} d-flex flex-column p-20`}
        >
          <h2 className="mb-20">Devis</h2>
          <button onClick={handleForm}>Ok </button>
        </div>
      ) : (
        <div className={`${styles.containerFormulaire} `}>
          <form onSubmit={handleSubmit(submit)} className="d-flex flex-column">
            <div className="d-flex flex-row mb-20">
              <h2 className="flex-fill">Devis</h2>
              <i
                onClick={handleForm}
                className={`fa-solid fa-xmark ${styles.mark}`}
              ></i>
            </div>
            <label htmlFor="email">E-mail</label>
            <input
              {...register("email")}
              defaultValues={"email"}
              className="mb-10"
            ></input>
            {errors?.email && <p>{errors.email.message}</p>}
            {errors?.email && <p>{errors.required.message}</p>}
            <label htmlFor="name">Nom</label>
            <input {...register("name")} className="mb-10"></input>
            {errors?.name && <p>{errors.required.message}</p>}
            <label htmlFor="surname">Prénom</label>
            <input {...register("surname")} className="mb-10"></input>
            {errors?.surname && <p>{errors.required.message}</p>}
            <label htmlFor="number">Numéro</label>
            <div className="d-flex flex-row">
              <select
                id="indicatif"
                {...register("indicatif")}
                className="mb-10"
              >
                {options.map((option) => (
                  <option key={option.optionValue} value={option.optionValue}>
                    <ReactCountryFlag countryCode={option.valueFlag} />{" "}
                    {option.optionValue}
                  </option>
                ))}
              </select>
              <input
                {...register("number", { valueAsNumber: true })}
                className="flex-fill mb-10"
              ></input>
              {errors?.number && <p>{errors.number.message}</p>}
            </div>
            <label htmlFor="comments">Demande précis</label>
            <textarea
              {...register("comments")}
              className="mb-20"
              placeholder="Préciser votre demande..."
            ></textarea>
            <div className="d-flex justify-content-center">
              <button disabled={isSubmitting} className={styles.formatButton}>
                <div className={`d-flex flex-row justify-content-center`}>
                  <i className="fa-solid fa-paper-plane mr-20"></i>
                  <h3>Envoyer</h3>
                </div>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default FormAdd;
