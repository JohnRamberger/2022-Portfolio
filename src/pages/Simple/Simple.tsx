import React, { FC, useState } from "react";
import styles from "./Simple.module.scss";
import page_styles from "../page.module.scss";

//import content
import {
  ProjectContent,
  ExperienceContent,
  Experience,
  Project,
} from "../../config/Content";

import Navbar from "../../components/Simple/Navbar/Navbar";
import Hero from "../../components/Simple/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Section from "../../layout/Section/Section";
import Flex from "../../layout/Flex/Flex";
import ProjectCard from "../../components/Simple/ProjectCard/ProjectCard";
import Modal from "../../components/Simple/Modal/Modal";
import ExperienceCard from "../../components/Simple/ExperienceCard/ExperienceCard";

interface SimpleProps {}

const Simple: FC<SimpleProps> = () => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project>();

  return (
    <div
      className={`${styles.Simple} ${page_styles.Page}`}
      data-testid="Simple"
    >
      <Navbar />
      <Hero />
      <Section style={{ backgroundColor: "#ccc", padding: "1em 0" }}>
        <h1 id="projects" className={styles.Major}>
          Projects
        </h1>
        <Flex
          dir="row"
          style={{
            gap: "1em",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {ProjectContent.projects.map((p, i) => (
            <ProjectCard
              project={p}
              key={i}
              handleClick={(e) => {
                setCurrentProject(p);
                setProjectModalOpen(true);
              }}
            ></ProjectCard>
          ))}
        </Flex>
      </Section>
      <Section style={{ padding: "1em 0" }}>
        <h1 id="experience" className={styles.Major}>
          Experience
        </h1>
        <Flex
          dir="row"
          style={{
            gap: "1em",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {Array.from(
            ExperienceContent.experience
              ?.reduce((a, b) => {
                if (a.has(b.company)) {
                  return a.set(b.company, [...a.get(b.company), b]);
                } else {
                  return a.set(b.company, [b]);
                }
              }, new Map())
              .values() || []
          ).map((e, i) => (
            <ExperienceCard experience={e} key={i}></ExperienceCard>
          ))}
        </Flex>
      </Section>
      <Footer />
      <Modal open={projectModalOpen} setOpen={setProjectModalOpen}>
        <div className={styles.ProjectModal}>
          <div className={styles.CoverImage}>
            <img src={currentProject?.image} alt={currentProject?.name} />
            <div className={styles.Fade}>
              <h1 className={styles.ProjectName}>{currentProject?.name}</h1>
            </div>
            
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Simple;
