import React, { FC } from "react";
import styles from "./Simple.module.scss";

import page_styles from "../page.module.scss";

interface SimpleProps {}

const Simple: FC<SimpleProps> = () => (
  <div className={`${styles.Simple} ${page_styles.Page}`} data-testid="Simple">
    Simple Component
  </div>
);

export default Simple;
