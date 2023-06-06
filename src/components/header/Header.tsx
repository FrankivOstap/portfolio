import React, { FC, useEffect, useState } from "react";
import styles from "./Header.module.css";
import heroImg from "../../assets/images/hero.png";
type Props = {};

export const Header: FC<Props> = (props) => {
  const words = ['DEVELOPMENT', 'TESTING', 'UX/UI DESIGN']; 

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.container}>
      <img className={styles.heroImg} src={heroImg} />
      <h2 className={styles.title}><span>Dev</span> Kostyantyn Dyachenko</h2>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <h1 className={styles.headline}>I CREATE SUCCESS</h1>
        <h4 className={styles.text}>
          I am a full stack developer with 6 years of experience specializing <span>in
          creative problem-solving</span>, development, testing, and UX/UI design.
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "56px",
          paddingRight: "100px",
        }}
      >
        <button className={styles.btn}>Contact Me</button>
        <div className={styles.info}>
          <span style={{ fontSize: "2.5rem" }}>50+</span>
          <span>Projects completed successfuly</span>
        </div>
      </div>
      <div className={styles.slidingLine}>
      <div className={styles.wordsContainer}>
        {words.map((word, index) => (
          <span
            key={index}
            className={styles.word}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};
