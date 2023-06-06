import React, { FC } from "react";
import styles from "./Services.module.css";
import { FaYoutube } from "react-icons/fa";

type Props = {};

export const Services: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>MY SERVICES</h2>
      <p className={styles.description}>
        My main goals is to bring to life the ideas that are born in my mind. I
        strongly believe that working together with joy and collaboration is
        essential to create exceptional products.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>UI/UX Design</h3>
          <p className={styles.cardDescription}>
            Produce high-quality visual designs - from concept to execution,
            including design for web, tablet and mobile devices
          </p>
        </div>
        <div className={styles.card}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <h3 className={styles.cardTitle}>Web Development</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=TaBVpfAkYw4"
            >
              <FaYoutube color="red" size={40} />
            </a>
          </div>
          <p className={styles.cardDescription}>
            Includes building, creating, and maintaining of websites
          </p>
        </div>
        <div className={styles.card}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <h3 className={styles.cardTitle}>Mobile Development</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=gfkAlk25Ynw"
            >
              <FaYoutube color="red" size={40} />
            </a>
          </div>
          <p className={styles.cardDescription}>
            Full process of creating software applications that run on a mobile
            device
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>QA/QC</h3>
          <p className={styles.cardDescription}>
            Quality management focused on providing confidence that quality
            requirements will be fulfilled
          </p>
        </div>
      </div>
    </div>
  );
};
