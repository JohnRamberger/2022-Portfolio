import React, { FC } from "react";
import styles from "./Navbar.module.scss";

import Flex from "../../../layout/Flex/Flex";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <Flex>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
    </Flex>
  </div>
);

export default Navbar;
