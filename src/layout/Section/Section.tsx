import React, { FC } from 'react';
import styles from './Section.module.scss';

interface SectionProps {}

const Section: FC<SectionProps> = () => (
  <div className={styles.Section} data-testid="Section">
    Section Component
  </div>
);

export default Section;
