import React, { FC } from "react";
import styles from "./Navbar.module.scss";

import Flex from "../../../layout/Flex/Flex";
import { Link } from "react-router-dom";

//load content
import { NavbarContent as cont } from "../../../config/Content";
import config from "../../../config/config";
import Go from "../../Go/Go";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <div
      className={styles.Wrapper}
      style={{
        maxWidth: config.wrapper.navbar,
        padding: `0 ${config.edgePadding}`,
      }}
    >
      <Flex
        dir="row"
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <h1 className={styles.Major}>{cont.title}</h1>
        <Flex
          dir="row"
          style={{
            height: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            flexGrow: 1,
            gap: "1em",
          }}
        >
          {cont.links.map((l, i) => (
            <div key={i} className={styles.Link}>
              <Go link={l} />
            </div>
          ))}
        </Flex>
      </Flex>
    </div>
  </div>
);

export default Navbar;
