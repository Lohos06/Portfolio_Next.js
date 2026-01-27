import Project1 from "./Project1/Project1"
import Project2 from "./Project2/Project2"
import Project3 from "./Project3/Project3"
import Project4 from "./Project4/Project4"

import styles from "./Projects.module.css"

export default function Projects() {
    return (
        <section className="flex flex-col items-center">
            <h2>Projects</h2>
            <div className={`${styles.Projects}`}>
                <Project1></Project1>
                <Project2></Project2>
                <Project3></Project3>
                <Project4></Project4>
            </div>
        </section>
    )
}
