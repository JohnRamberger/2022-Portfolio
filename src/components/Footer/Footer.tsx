import React, { FC } from "react";
import styles from "./Footer.module.scss";

import Flex from "../../layout/Flex/Flex";

import { FooterContent as cont } from "../../config/Content";
import config from "../../config/config";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    <div
      className={styles.Wrapper}
      style={{ maxWidth: config.wrapper.default }}
    >
      <Flex dir="row" style={{ gap: "1em", flexWrap: "wrap" }}>
        {cont.sections.map((s, i) => {
          return (
            <Flex key={i} dir="column" style={{ flexWrap: "wrap" }}>
              {s.label}
            </Flex>
          );
        })}
      </Flex>
    </div>
  </div>
);

export default Footer;
