import React, { FC } from "react";
import styles from "./Footer.module.scss";

import Flex from "../../layout/Flex/Flex";

import { FooterContent as cont } from "../../config/Content";
import config from "../../config/config";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    <div
      className={styles.Wrapper}
      style={{
        maxWidth: config.wrapper.default,
        padding: `2em ${config.edgePadding}`,
      }}
    >
      {cont.message ? <h2 className={styles.Message}>{cont.message}</h2> : ""}
      <Flex
        dir="row"
        style={{
          gap: "2em",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {cont.sections.map((s, i) => {
          return (
            <Flex key={i} dir="column" style={{ flexWrap: "wrap" }}>
              <h2 className={styles.Minor}>{s.label}</h2>
              {s.links
                ? s.links.map((l, j) => (
                    <>
                      {l.type === "a" ? (
                        <a
                          key={j}
                          href={l.url}
                          className={styles.Link}
                          target={l.target ?? ""}
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link key={j} to={l.url} className={styles.Link}>
                          {l.label}
                        </Link>
                      )}
                    </>
                  ))
                : ""}
            </Flex>
          );
        })}
      </Flex>
    </div>
  </div>
);

export default Footer;
