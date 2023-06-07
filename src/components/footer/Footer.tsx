import React, { FC, useEffect, useState } from "react";
import styles from "./Footer.module.css";

type Props = {};

export const Footer: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}><span>Dev</span> Kostyantyn Dyachenko</h2>
      <div className={styles.nav}>
        <span>About Me</span>
        <span>My Services</span>
      </div>
      <div className={styles.nav}>
        <span>My Approach</span>
        <span>Recent Project</span>
      </div>
    </div>
  );
};
