import moment from "moment";
import React from "react";
import styles from "./TimeLaps.module.css";

function TimeLaps({ tittle, data }) {
  return (
    <div className={styles.TimeLaps}>
      <h2>{tittle}</h2>
      <div className={styles.Content}>
        {data.sort(compareYears).map((point, idx) => {
          const periodYears = getPeriodYears(
            point.period.from,
            point.period.to
          );
          return (
            <div key={idx} className={styles.Point}>
              <div className={styles.PointHeader}>
                <p className={styles.YearBox}>{periodYears}</p>
                <div>
                  <p className={styles.PointName}>{point.name}</p>
                  <p>{point.description}</p>
                </div>
                <p className={styles.Place}>{point.place}</p>
              </div>
              <div className={styles.PointBody}>
                {point.additional.map((additional, index) => {
                  return (
                    <div key={index} className={styles.Additional}>
                      <div>
                        <h3>{additional.name}</h3>
                        <p>{additional.description}</p>
                      </div>
                      <ul>
                        {additional.list.map((element, i) => (
                          <li key={i}>{element}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLaps;

function getPeriodYears(from, to) {
  const periodFrom = moment(from);
  const periodTo = moment(to);
  let periodYears = "";
  if (periodFrom.isValid() || periodTo.isValid()) {
    const periodFromYear = periodFrom.isValid()
      ? periodFrom.year() + " - "
      : "";
    const periodToYear = periodTo.isValid() ? periodTo.year() : "Present";
    periodYears = periodFromYear + periodToYear;
  }
  return periodYears;
}

function compareYears(a, b) {
  if (a.period.to.length === 0) return a;
  if (b.period.to.length === 0) return b;
  const yearA = moment(a.period.to).year();
  const yearB = moment(b.period.to).year();
  return yearB - yearA;
}
