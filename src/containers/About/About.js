import React from "react";
import TimeLaps from "../../components/TimeLaps/TimeLaps";
import { education, workExperience } from "../../data/data";
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
      {/* Skills,Own Projects,Summary */}
    </div>
  );
}

export default About;
