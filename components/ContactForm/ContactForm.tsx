"use client"

import email from "@/actions/email"
import styles from "./ContactForm.module.css"
import { FormEvent, useState } from "react";

export default function ContactForm() {

  const[subjectValue, setSubjectValue] = useState("client")
  const[emailValue, setEmailValue] = useState("")
  const[messageValue, setMessageValue] = useState("")

  const [submitMessage, setSubmitMessage] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email(subjectValue, emailValue, messageValue);
    console.log(subjectValue, emailValue, messageValue);
    setSubmitMessage("Mail envoyé");
  }

  return (
      <form id="contact" onSubmit={submit} className={`${styles.form}`}>
        <fieldset className={`${styles.FieldSet}`}>
            <legend className={`${styles.legend}`}>Vos informations</legend>
            <div className={`${styles.Field}`}>
              <label htmlFor="mean">Sujet du Contact</label>
              <select name="mean" id="mean" value={subjectValue} onChange={(e) => setSubjectValue(e.target.value)} className={`${styles.input}`}>
                  <option value="client">Demande de service</option>
                  <option value="other">autre</option>
              </select>
            </div>
            <div className={`${styles.Field}`}>
              <label htmlFor="email">Votre email</label>
              <input type="text" name="email" id="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className={`${styles.input}`}/>
            </div>
        </fieldset>
        <fieldset className={`${styles.FieldSet}`}>
            <legend className={`${styles.legend}`}>Message</legend>
            <div className={`${styles.Field}`}>
              <label htmlFor="message">Contenu du message</label>
              <textarea name="message" id="message" value={messageValue} onChange={(e) => setMessageValue(e.target.value)} className={`${styles.input} ${styles.textarea}`}></textarea>
            </div>
        </fieldset>
        <input type="submit" id="submit" className={`${styles.submit}`}/>
        <p className={`${styles.submitMessage}`}>{submitMessage}</p>
      </form>
    )
}