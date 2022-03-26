import React, { useEffect, useState } from "react";
import SkillsList from "../../components/SkillsList/SkillsList";
import SliderDeck from "../../components/Slider/SliderDeck/SliderDeck";
import TimeLaps from "../../components/TimeLaps/TimeLaps";
import {
  education,
  ownProjects,
  pdfLink,
  skills,
  summary,
  workExperience,
} from "../../data/data";
import styles from "./About.module.css";

function About() {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  const [printMode, setPrintMode] = useState(false);

  const buttonHandler = () => {
    setIsSkillsExpanded(true);
    setPrintMode(true);
  };

  useEffect(() => {
    if (printMode) {
      window.print();
      setPrintMode(false);
    }
  }, [printMode]);

  return (
    <div className={styles.About}>
      <div className={styles.PDFButtons}>
        <button onClick={buttonHandler} className={styles.PDFButton}>
          Export to PDF ( for PC )
        </button>
        <a href={pdfLink} className={styles.PDFButton}>
          Download latest PDF version
        </a>
      </div>
      <h1>Software developer</h1>
      <div className={styles.Summary}>
        <p>{summary}</p>
      </div>
      <TimeLaps tittle="Work Experience" data={workExperience} />
      <TimeLaps tittle="Education" data={education} />
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
            containerHeight={170}
            containerWidth={140}
            imageHeight={55}
            imageWidth={120}
            data={skills}
          />
        )}
      </div>
      <div className={styles.OwnProjects}>
        <h2>Own projects</h2>
        <div>
          {ownProjects
            .sort((project1, project2) => project2.year - project1.year)
            .map((projectData, index) => (
              <div key={index} className={styles.Project}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h3>{projectData.name}</h3>
                  <p className={styles.ProjectYear}>{projectData.year}</p>
                </div>
                {projectData.image.length > 0 ? (
                  <img
                    src={process.env.PUBLIC_URL + projectData.image}
                    alt={projectData.name}
                  />
                ) : (
                  <span>no image available</span>
                )}
                <p style={{ gridArea: "description" }}>
                  {projectData.description}
                  <a href={projectData.link}> GitHub</a>
                </p>
                <p className={styles.Keywords}>
                  {`Keywords : [ ${projectData.keywords.join(", ")} ]`}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default About;
