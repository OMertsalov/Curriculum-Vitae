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

function Information() {
  const birthDate = "1997-06-10";
  const currentAge = moment().diff(birthDate, "years");
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
        Kraków, Poland
      </p>
      <p>
        <a href="tel:+48791-030-224">
          <FontAwesomeIcon
            icon={faPhone}
            color="#e4e4e4"
            style={{ paddingRight: 5 }}
          />
          (+48) 791-030-224
        </a>
      </p>
      <p>
        <a href="mailto:aleksandermertsalov@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#e4e4e4"
            style={{ paddingRight: 5 }}
          />
          aleksandermertsalov@gmail.com
        </a>
      </p>
      <div className={styles.Socials}>
        <a href="https://www.linkedin.com/in/aleksandermertsalov">
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#e4e4e4" />
        </a>
        <a href="https://www.github.com/OMertsalov">
          <FontAwesomeIcon icon={faGithub} size="2x" color="#e4e4e4" />
        </a>
        <a href="https://www.instagram.com/mertsal0v/">
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#e4e4e4" />
        </a>
      </div>
    </div>
  );
}

export default Information;
