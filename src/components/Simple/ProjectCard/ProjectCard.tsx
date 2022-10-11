import React, { FC } from "react";
import styles from "./ProjectCard.module.scss";

import { Project } from "../../../config/Content";
import Flex from "../../../layout/Flex/Flex";

interface ProjectCardProps {
  project?: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
  <div className={styles.ProjectCard} data-testid="ProjectCard">
    <Flex dir="column" style={{ width: "100%" }}>
      <div className={styles.Image}>
        <img alt={project?.name} src={project?.image} />
      </div>
      <div className={styles.Title}>
        {project?.name}
        <span className={styles.ProjectType}>({project?.type})</span>
      </div>
      <div className={styles.Description}>{project?.desc}</div>
    </Flex>
  </div>
);

export default ProjectCard;
