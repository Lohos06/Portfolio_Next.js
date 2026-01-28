import Project from "./Project/Project"

import styles from "./Projects.module.css"

export default function Projects() {
    return (
        <section className="flex flex-col items-center">
            <h2>Projects</h2>
            <div className={`${styles.Projects}`}>
                <Project id={0}/>
                <Project id={1}/>
                <Project id={2}/>
                <Project id={3}/>
            </div>
        </section>
    )
}
