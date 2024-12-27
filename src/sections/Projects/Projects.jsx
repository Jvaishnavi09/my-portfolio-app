import styles from "./ProjectsStyles.module.css";
import hoobank from "../../assets/Desktop - 1.png";
import ProjectCard from "../../common/ProjectCard";
import youtubeClone from "../../assets/YOUTUBE CLONE.png";
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
        <ProjectCard
          src={youtubeClone}
          link="https://bright-cat-2b9d4b.netlify.app/"
          h3="Web Frontend-API"
          p="Youtube Clone -React and Material UI"
        />
      </div>
    </section>
  );
}

export default Projects;
