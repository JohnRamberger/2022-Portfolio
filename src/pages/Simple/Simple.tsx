import React, { FC } from "react";
import styles from "./Simple.module.scss";
import page_styles from "../page.module.scss";

import Navbar from "../../components/Simple/Navbar/Navbar";
import Hero from "../../components/Simple/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Section from "../../layout/Section/Section";
import Flex from "../../layout/Flex/Flex";
import ProjectCard from "../../components/Simple/ProjectCard/ProjectCard";

//import content
import { ProjectContent } from "../../config/Content";

interface SimpleProps {}

const Simple: FC<SimpleProps> = () => (
  <div className={`${styles.Simple} ${page_styles.Page}`} data-testid="Simple">
    <Navbar />
    <Hero />
    <Section style={{ backgroundColor: "#ccc" }}>
      <Flex
        dir="row"
        style={{
          gap: "1em",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {ProjectContent.projects.map((p, i) => (
          <ProjectCard project={p} key={i}></ProjectCard>
        ))}
      </Flex>
    </Section>
    <Footer />
  </div>
);

export default Simple;
