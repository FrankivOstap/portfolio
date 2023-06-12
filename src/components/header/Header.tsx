import React, { FC } from "react";
import styles from "./Header.module.css";
import heroImg from "../../assets/images/hero.png";
type Props = {};

export const Header: FC<Props> = (props) => {
  const words = ["DEVELOPMENT", "TESTING", "UX/UI DESIGN"];

  return (
    <div className={styles.container}>
      <img className={styles.heroImg} src={heroImg} alt="heroImg" />
      <div className={styles.infoContainer}>
        <h1 className={styles.headline}>I CREATE SUCCESS</h1>
        <h4 className={styles.text}>
          I am a full stack developer with 6 years of experience specializing{" "}
          <span>in creative problem-solving</span>, development, testing, and
          UX/UI design.
        </h4>
      </div>
      <div className={styles.contactContainer}>
        <a
          rel="noreferrer"
          href="https://www.upwork.com/freelancers/~01ba5883ceb65e5062"
          target="_blank"
          className={styles.btn}
        >
          Contact Me
        </a>
        <div className={styles.info}>
          <span style={{ fontSize: "2.5rem" }}>50+</span>
          <span>Projects completed successfuly</span>
        </div>
      </div>
      <div className={styles.slidingLine}>
        <div className={styles.wordsContainer}>
          {words.map((word, index) => (
            <span key={index} className={styles.word}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
