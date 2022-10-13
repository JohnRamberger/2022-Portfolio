import React, { FC } from "react";
import styles from "./ExperienceCard.module.scss";

import { ExperienceContent, Experience } from "../../../config/Content";
import Flex from "../../../layout/Flex/Flex";

interface ExperienceCardProps {
  experience: Experience[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  let ms = experience.reduce((p, n) => {
    if (n.start && n.end) {
      let start = new Date(n.start);
      let end;
      if (n.end.toLowerCase() === "present") {
        end = new Date();
      } else {
        end = new Date(n.end);
      }

      return end.getTime() - start.getTime() + p;
    }
    return p;
  }, 0);

  let months = Math.floor((ms / 1000 / 60 / 60 / 24 / 30) % 12);
  let years = Math.floor(ms / 1000 / 60 / 60 / 24 / 365);
  let times = [];
  if (years) {
    times.push(`${years} yr${years > 1 ? "s" : ""}`);
  }
  if (months) {
    times.push(`${months} mo${months > 1 ? "s" : ""}`);
  }

  return (
    <div className={styles.ExperienceCard} data-testid="ExperienceCard">
      <Flex dir="row" style={{ gap: "1em" }}>
        <div className={styles.Image}>
          {experience && experience[0] ? (
            <img
              src={experience[0]?.company_image}
              alt={experience[0]?.company + " logo"}
            />
          ) : (
            ""
          )}
        </div>
        {experience.length > 1 ? (
          //greater than 1 position
          <Flex dir="column" style={{ gap: "1em" }}>
            <div>
              <h2 className={styles.CompanyName}>{experience[0].company}</h2>
              <p className={styles.Timeframe}>{times.join(" ")}</p>
            </div>
            {experience
              .sort((a, b) => {
                //more recent first
                return 1
                // if (a.start && b.start) return -1;
                // return 0;
                // return new Date(a.start.);
              })
              .map((e, i) => (
                <div className={styles.CompanyBlock} key={i}>
                  <p className={styles.Position}>{e.position}</p>
                  <p className={styles.Timeframe}>
                    {e.start && e.end
                      ? `${e.start} — ${e.end}`
                      : e.start || e.end || ""}
                  </p>
                </div>
              ))}
          </Flex>
        ) : (
          // only 1 position
          <Flex dir="column" style={{ gap: "0.5em" }}>
            <h2 className={styles.CompanyName}>{experience[0].company}</h2>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default ExperienceCard;
