import React, { FC } from "react";
import styles from "./Section.module.scss";

import config from "../../config/config";

interface SectionProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Section: FC<SectionProps> = ({ children, style }) => (
  <div className={styles.Section} data-testid="Section" style={style}>
    <div
      className={styles.Wrapper}
      style={{
        maxWidth: config.wrapper.section,
        padding: `0 ${config.edgePadding}`,
      }}
    >
      {children}
    </div>
  </div>
);

export default Section;
