import React from "react";
import SliderDeck from "../../components/Slider/SliderDeck/SliderDeck";
import TimeLaps from "../../components/TimeLaps/TimeLaps";
import { education, skills, workExperience } from "../../data/data";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.About}>
      <h1>Software developer</h1>
      <div className={styles.Work}>
        <TimeLaps tittle="Work Experience" data={workExperience} />
      </div>
      <div className={styles.Education}>
        <TimeLaps tittle="Education" data={education} />
      </div>
      <div>
        <h2>Skills</h2>
        <SliderDeck
          containerHeight={230}
          containerWidth={160}
          imageHeight={65}
          imageWidth={150}
          data={skills}
        />
      </div>
      {/*Own Projects,Summary */}
    </div>
  );
}

export default About;
