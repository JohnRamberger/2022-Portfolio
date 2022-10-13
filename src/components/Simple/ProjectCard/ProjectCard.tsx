import React, { FC } from "react";
import styles from "./ProjectCard.module.scss";

import { Project } from "../../../config/Content";
import Flex from "../../../layout/Flex/Flex";

interface ProjectCardProps {
  project?: Project;
  handleClick?: (e: React.MouseEvent) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, handleClick }) => (
  <div
    className={styles.ProjectCard}
    data-testid="ProjectCard"
    onClick={(e) => {
      if (handleClick) handleClick(e);
    }}
  >
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
