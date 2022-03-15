import React from "react";
import styles from "./Information.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { contactData } from "../../data/data";

function Information() {
  const currentAge = moment().diff(contactData.birthDate, "years");
  return (
    <div className={styles.Information}>
      <p>
        <FontAwesomeIcon
          icon={faCalendarDay}
          color="#e4e4e4"
          style={{ paddingRight: 5 }}
        />
        {`${currentAge} years old`}
      </p>
      <p>
        <FontAwesomeIcon
          icon={faLocationDot}
          color="#e4e4e4"
          style={{ paddingRight: 5 }}
        />
        {contactData.location}
      </p>
      <p>
        <a href={`tel:+48${contactData.phone}`}>
          <FontAwesomeIcon
            icon={faPhone}
            color="#e4e4e4"
            style={{ paddingRight: 5 }}
          />
          {`(+48) ${contactData.phone}`}
        </a>
      </p>
      <p>
        <a href={`mailto:${contactData.email}`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#e4e4e4"
            style={{ paddingRight: 5 }}
          />
          {contactData.email}
        </a>
      </p>
      <div className={styles.Socials}>
        <a href={contactData.linkedinURL}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#e4e4e4" />
        </a>
        <a href={contactData.githubURL}>
          <FontAwesomeIcon icon={faGithub} size="2x" color="#e4e4e4" />
        </a>
        <a href={contactData.instagramURL}>
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#e4e4e4" />
        </a>
      </div>
    </div>
  );
}

export default Information;
