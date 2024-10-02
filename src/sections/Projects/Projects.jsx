import styles from "./ProjectsStyles.module.css";
import hoobank from "../../assets/Desktop - 1.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hoobank}
          link="https://spiffy-pasca-9e0459.netlify.app/"
          h3="Web Frontend"
          p="Banking App- React and Tailwind"
        />
      </div>
    </section>
  );
}

export default Projects;
