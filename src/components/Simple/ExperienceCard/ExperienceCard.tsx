import React, { FC } from "react";
import styles from "./ExperienceCard.module.scss";

import { ExperienceContent, Experience } from "../../../config/Content";
import Flex from "../../../layout/Flex/Flex";

interface ExperienceCardProps {
  experience: Experience[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
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
          <Flex dir="column" style={{ gap: "0.5em" }}>
            <h2 className={styles.CompanyName}>{experience[0].company}</h2>
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
