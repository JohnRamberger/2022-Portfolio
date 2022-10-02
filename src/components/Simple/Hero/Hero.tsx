import React, { FC } from 'react';
import styles from './Hero.module.scss';

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className={styles.Hero} data-testid="Hero">
    Hero Component
  </div>
);

export default Hero;
