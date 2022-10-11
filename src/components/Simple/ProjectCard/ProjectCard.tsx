import React, { FC } from 'react';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {}

const ProjectCard: FC<ProjectCardProps> = () => (
  <div className={styles.ProjectCard} data-testid="ProjectCard">
    ProjectCard Component
  </div>
);

export default ProjectCard;
