import React, { useState } from "react";
import SkillsList from "../../components/SkillsList/SkillsList";
import SliderDeck from "../../components/Slider/SliderDeck/SliderDeck";
import TimeLaps from "../../components/TimeLaps/TimeLaps";
import { education, skills, summary, workExperience } from "../../data/data";
import styles from "./About.module.css";

function About() {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  return (
    <div className={styles.About}>
      <h1>Software developer</h1>
      <div className={styles.Summary}>
        <p>{summary}</p>
      </div>
      <div className={styles.Work}>
        <TimeLaps tittle="Work Experience" data={workExperience} />
      </div>
      <div className={styles.Education}>
        <TimeLaps tittle="Education" data={education} />
      </div>
      <div>
        <h2>Skills</h2>
        <p
          style={{ width: "100%", textAlign: "end", cursor: "pointer" }}
          onClick={() => setIsSkillsExpanded((state) => !state)}
        >
          {isSkillsExpanded ? "Shrink list" : "Expand list"}
        </p>
        {isSkillsExpanded ? (
          <SkillsList data={skills} />
        ) : (
          <SliderDeck
            containerHeight={230}
            containerWidth={140}
            imageHeight={55}
            imageWidth={120}
            data={skills}
          />
        )}
      </div>
      {/*Own Projects*/}
    </div>
  );
}

export default About;
