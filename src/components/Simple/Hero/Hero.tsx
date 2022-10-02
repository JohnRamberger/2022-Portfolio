import React, { FC } from "react";
import styles from "./Hero.module.scss";

import { HeroContent as cont } from "../../../config/Content";
import { Link } from "react-router-dom";

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className={styles.Hero} data-testid="Hero">
    <h1>{cont.major}</h1>
    <h2>{cont.minor}</h2>
    <Link to={cont.button.url} className={styles.Button}>{cont.button.label}</Link>
  </div>
);

export default Hero;
