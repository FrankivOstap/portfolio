import React, { FC } from "react";
import styles from "./Approach.module.css";
type Props = {};

export const Approach: FC<Props> = (props) => {
  return (
    <div className={styles.container} id="approach">
      <h2 className={styles.title}>MY APPROACH</h2>
      <p className={styles.description}>
        I offer end-to-end software development services that encompass
        everything from idea generation to rigorous testing and
        successful launch. I utilize cutting-edge technologies to create
        high-quality products that are easy to maintain over time.
        <br />
        <br />
        One of my key strengths is my ability to communicate
        effectively with clients and respond quickly to their feedback and
        requests.
      </p>
    </div>
  );
};
