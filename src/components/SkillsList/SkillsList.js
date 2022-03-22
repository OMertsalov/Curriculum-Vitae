import React from "react";
import styles from "./SkillsList.module.css";

function SkillsList({ data }) {
  const skillTypes = data
    .map((skill) => skill.type)
    .filter((value, index, self) => self.indexOf(value) === index);
  return (
    <div>
      {skillTypes.map((type, index) => {
        return (
          <div key={index}>
            <h3>{type}</h3>
            <ul>
              {data
                .filter((skill) => skill.type === type)
                .map((skill) => {
                  return (
                    <li>
                      <p>
                        {skill.name}
                        <span className={styles.Description}>
                          {skill.description.length
                            ? ` ( ${skill.description} )`
                            : ""}
                        </span>
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsList;
