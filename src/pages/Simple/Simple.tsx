import React, { FC } from 'react';
import styles from './Simple.module.scss';

interface SimpleProps {}

const Simple: FC<SimpleProps> = () => (
  <div className={styles.Simple} data-testid="Simple">
    Simple Component
  </div>
);

export default Simple;
