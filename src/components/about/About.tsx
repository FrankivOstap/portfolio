import React, { FC } from "react";
import styles from "./About.module.css";
type Props = {};

export const About: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ABOUT ME</h2>
      <p className={styles.text}>
        My mission is the belief that the most
        innovative ideas are born when people work together in an environment of
        joy and collaboration. That's why I adore to work in team of passionate
        professionals.
        <br />
        <br />
        I specialize in developing premium mobile apps and websites that help
        my clients achieve their business goals and increase their profits.
      </p>
      <div style={{display: 'flex', marginTop: 40}}>
        <div className={styles.card}>
          <h2>5</h2>
          <h4>Years of experience</h4>
        </div>
        <div className={styles.card}>
          <h2>50+</h2>
          <h4>Projects completed successfuly</h4>
        </div>
      </div>
    </div>
  );
};
