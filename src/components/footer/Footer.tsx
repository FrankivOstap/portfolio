import React, { FC, useEffect, useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";

type Props = {};

export const Footer: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <img style={{width: 200, height: 100}} src={logo} alt="logo" />
      <div className={styles.nav}>
        <span>About Me</span>
        <span>My Services</span>
        <span>My Approach</span>
        <span>Recent Project</span>
      </div>
    
    </div>
  );
};
