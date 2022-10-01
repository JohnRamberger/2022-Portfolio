import React, { FC } from 'react';
import styles from './SciFi.module.scss';

interface SciFiProps {}

const SciFi: FC<SciFiProps> = () => (
  <div className={styles.SciFi} data-testid="SciFi">
    SciFi Component
  </div>
);

export default SciFi;
