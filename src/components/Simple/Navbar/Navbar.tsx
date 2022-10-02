import React, { FC } from "react";
import styles from "./Navbar.module.scss";

import Flex from "../../../layout/Flex/Flex";
import { Link } from "react-router-dom";

//load content
import { NavbarContent as cont } from "../../../config/Content";
import config from "../../../config/config";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <div className={styles.Wrapper} style={{ maxWidth: config.wrapper.navbar }}>
      <Flex
        dir="row"
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          gap: "1em",
          padding: "0 1em",
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
            <Link key={i} to={l.url} className={styles.Link}>
              {l.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </div>
  </div>
);

export default Navbar;
