import React from "react";
import styles from "./Contact.module.css";
import profilePhoto from "../../assets/social_photo1.jpg";
import Information from "../../components/Information/Information";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function Contact() {
  const languages = [
    { name: "polish", progress: 100 },
    { name: "ukrainian", progress: 100 },
    { name: "russian", progress: 100 },
    { name: "english", progress: 90 },
  ];
  return (
    <div className={styles.Contact}>
      <div className={styles.Photo}>
        <img src={profilePhoto} alt="It's me! Hi :)" width={160} height={200} />
      </div>
      <div className={styles.Name}>
        <h1 style={{ gridArea: "name" }}>Aleksander</h1>
        <h1 style={{ gridArea: "surname" }}>Mertsalov</h1>
      </div>
      <Information />
      <div className={styles.Languages}>
        <h2>Languages</h2>
        {languages.map((language) => (
          <ProgressBar
            id={language.name}
            label={language.name}
            value={language.progress}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
