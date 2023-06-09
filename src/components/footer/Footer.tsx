import React, { FC, useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";

type Props = {};

export const Footer: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <img style={{ width: 200, height: 100 }} src={logo} alt="logo" />
      <div className={styles.nav}>
        <Link to="about" smooth={true} duration={500}>
          <span>About Me</span>
        </Link>
        <Link to="tools" smooth={true} duration={500}>
          <span>My Tools</span>
        </Link>
        <Link to="approach" smooth={true} duration={500}>
          <span>My Approach</span>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <span>Recent Project</span>
        </Link>
      </div>
    </div>
  );
};
