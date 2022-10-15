import React, { FC } from "react";
import styles from "./Section.module.scss";

import config from "../../config/config";

interface SectionProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}

const Section: FC<SectionProps> = ({ children, style, id }) => (
  <div className={styles.Section} data-testid="Section" style={style} id={id}>
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
