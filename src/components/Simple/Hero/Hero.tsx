import React, { FC } from "react";
import styles from "./Hero.module.scss";

import { HeroContent } from "../../../config/Content";

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className={styles.Hero} data-testid="Hero">
    <h1>{HeroContent.major}</h1>
    <h2>{HeroContent.minor}</h2>
  </div>
);

export default Hero;
