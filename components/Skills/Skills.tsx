import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <section className={`${styles.section}`}>
            <h2 className={`${styles.h2}`}>Competences</h2>
            <div className={`${styles.Skills}`}>
                <div>
                    <h3 className={`${styles.h3}`}>Hard Skills</h3>
                    <ul>
                        <li>HTML, CSS</li>
                        <li>JavaScript, Next</li>
                        <li>PHP, SQL</li>
                        <li>Git et GitHub</li>
                        <li>Python</li>
                        <li>TailWind</li>
                        <li>Symfony</li>
                    </ul>
                </div>
                <div>
                    <h3 className={`${styles.h3}`}>Soft Skills</h3>
                    <ul>
                        <li>Organisation</li>
                        <li>Coopération</li>
                        <li>Gestion de projet</li>
                        <li>Écoute</li>
                        <li>Respect</li>
                        <li>Autonomie</li>
                    </ul>
                </div>
            </div>
           
        </section>
    )
}