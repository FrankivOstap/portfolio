import React, { FC, useEffect, useState } from "react";
import styles from "./About.module.css";
import "./styles.css";
type Props = {};

export const About: FC<Props> = (props) => {
  return (
    <div className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT ME</h2>
      <p className={styles.text}>
        My mission is the belief that the most innovative ideas are born when
        people work together in an environment of joy and collaboration. That's
        why I adore to work in team of passionate professionals.
        <br />
        <br />I specialize in developing premium mobile apps and websites that
        help my clients achieve their business goals and increase their profits.
      </p>
      <div style={{ display: "flex", marginTop: 40 }}>
        <div className={styles.card}>
          <div id="counter" className="animated">
            <ul className="digits digits-second luckie">
              <li>0</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>2</li>
              <li>3</li>
              <li>5</li>
              <li>5</li>
            </ul>
          </div>
          <h4>Years of experience</h4>
        </div>
        <div className={styles.card}>
          <div id="counter" className="animated">
            <ul className="digits digits-second luckie">
              <li>0</li>
              <li>1</li>
              <li>0</li>
              <li>10</li>
              <li>20</li>
              <li>30</li>
              <li>50+</li>
              <li>5</li>
            </ul>
          </div>
          <h4>Projects completed successfuly</h4>
        </div>
      </div>
    </div>
  );
};
