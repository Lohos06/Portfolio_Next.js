import styles from "./ContactForm.module.css"

export default function ContactForm() {
    return (
        <form id="contact" method="POST" className={`${styles.form}`}>
          <fieldset className={`${styles.FieldSet}`}>
              <legend className={`${styles.legend}`}>Vos informations</legend>
              <div className={`${styles.Field}`}>
                <label htmlFor="mean">Sujet du Contact</label>
                <select name="mean" id="mean" className={`${styles.input}`}>
                    <option value="client">Demande de service</option>
                    <option value="other">autre</option>
                </select>
              </div>
              <div className={`${styles.Field}`}>
                <label htmlFor="email">Votre email</label>
                <input type="text" name="email" id="email" className={`${styles.input}`}/>
              </div>
          </fieldset>
          <fieldset className={`${styles.FieldSet}`}>
              <legend className={`${styles.legend}`}>Message</legend>
              <div className={`${styles.Field}`}>
                <label htmlFor="message">Contenu du message</label>
                <textarea name="message" id="message" className={`${styles.input} ${styles.textarea}`}></textarea>
              </div>
          </fieldset>
          <input type="submit" id="submit" className={`${styles.submit}`}/>
        </form>
    )
}