import React, { FC } from "react";
import Slider from "infinite-react-carousel";
import styles from "./Projects.module.css";
import fishImg from "../../assets/images/projects/fish.png";
import closetImg from "../../assets/images/projects/Closet.png";
import xriteImg from "../../assets/images/projects/xrite.png";
import yabkoImg from "../../assets/images/projects/yabko.png";
import turwearImg from "../../assets/images/projects/turwear.png";

type Props = {};

export const Projects: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>RECENT PROJECTS</h2>
      <Slider
        centerMode={true}
        autoplay={true}
        duration={100}
        autoplaySpeed={3000}
        slidesToShow={3}
        shift={50}
      >
        <div className={styles.card}>
          <img src={fishImg} alt="fishImg" />
          <h3 className={styles.cardTitle}>Fish Recipes</h3>
          <p className={styles.cardText}>Healthy recipes & cooking videos</p>
        </div>
        <div className={styles.card}>
          <img src={closetImg} alt="closetImg"/>
          <h3 className={styles.cardTitle}>Smart Closet</h3>
          <p className={styles.cardText}>Wardrobe managing app</p>
        </div>
        <div className={styles.card}>
          <img src={xriteImg} alt="xriteImg"/>
          <h3 className={styles.cardTitle}>XRite</h3>
          <p className={styles.cardText}>Color management solution </p>
        </div>
        <div className={styles.card}>
          <img src={yabkoImg} alt="yabkoImg"/>
          <h3 className={styles.cardTitle}>Jabko Ua</h3>
          <p className={styles.cardText}>Apple production shop</p>
        </div>
        <div className={styles.card}>
          <img src={turwearImg} alt="turwearImg"/>
          <h3 className={styles.cardTitle}>Tur Streetwear</h3>
          <p className={styles.cardText}>Streetwear store</p>
        </div>
      </Slider>
    </div>
  );
};
