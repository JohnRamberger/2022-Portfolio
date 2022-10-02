import React, { FC } from "react";
import styles from "./Hero.module.scss";

import { HeroContent as cont } from "../../../config/Content";
import { Link } from "react-router-dom";
import Section from "../../../layout/Section/Section";
import Flex from "../../../layout/Flex/Flex";

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className={styles.Hero} data-testid="Hero">
    <Section>
      <Flex
        dir="row"
        style={{
          width: "100%",
          padding: "2em 0",
          minHeight: "300px",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex dir="column" style={{ gap: "0.5em" }}>
          <h1 className={styles.Major}>{cont.major}</h1>
          {cont.minor ? <h2 className={styles.Minor}>{cont.minor}</h2> : ""}
          {cont.button ? (
            <Link to={cont.button.url} className={styles.Button}>
              {cont.button.label}
            </Link>
          ) : (
            ""
          )}
        </Flex>
      </Flex>
    </Section>
  </div>
);

export default Hero;
