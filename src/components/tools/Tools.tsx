import React, { FC } from "react";
import styles from "./Tools.module.css";
import xdIcon from "../../assets/images/tools/01.svg";
import vsCodeIcon from "../../assets/images/tools/02.svg";
import webStormIcon from "../../assets/images/tools/03.svg";
import figmaIcon from "../../assets/images/tools/04.svg";
import githubIcon from "../../assets/images/tools/05.svg";
import angularIcon from "../../assets/images/tools/06.svg";
import rubiIcon from "../../assets/images/tools/07.svg";
import xcodeIcon from "../../assets/images/tools/08.svg";
import jiraIcon from "../../assets/images/tools/09.svg";
import psIcon from "../../assets/images/tools/10.svg";
import railIcon from "../../assets/images/tools/12.svg";
import postmanIcon from "../../assets/images/tools/13.svg";
import bracketsIcon from "../../assets/images/tools/14.svg";
import astericsIcon from "../../assets/images/tools/15.svg";

type Props = {};

export const Tools: FC<Props> = (props) => {
  return (
    <div className={styles.container} id="tools">
      <h2 className={styles.background}>TOOLS</h2>
      <h3 className={styles.title}>TOOLS</h3>
      <p className={styles.text}>
        I use a wide range of technologies and tools.
      </p>
      <div className={styles.icons}>
        <img src={xdIcon} alt="xdIcon" />
        <img src={vsCodeIcon} alt="vsCodeIcon" />
        <img src={webStormIcon} alt="webStormIcon" />
        <img src={figmaIcon} alt="figmaIcon" />
        <img src={rubiIcon} alt="rubiIcon" />
        <a
          href="https://github.com/KostiantynDyachenko"
          rel="noreferrer"
          target="_blank"
        >
          <img src={githubIcon} alt="githubIcon" />
        </a>
        <img src={angularIcon} alt="angularIcon" />
        <img src={xcodeIcon} alt="xcodeIcon" />
        <img src={jiraIcon} alt="jiraIcon" />
        <img src={psIcon} alt="psIcon" />
        <img src={railIcon} alt="railIcon" />
        <img src={postmanIcon} alt="postmanIcon" />
        <img src={bracketsIcon} alt="bracketsIcon" />
        <img src={astericsIcon} alt="astericsIcon" />
      </div>
    </div>
  );
};
