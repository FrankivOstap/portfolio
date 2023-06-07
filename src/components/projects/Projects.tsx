import React, { FC } from "react";
import Slider from "infinite-react-carousel";
import styles from "./Projects.module.css";
import bellairImg from "../../assets/images/projects/bellair.png";
import bringlyImg from "../../assets/images/projects/bringly.png";
import gamingImg from "../../assets/images/projects/gaming.png";
import softwareImg from "../../assets/images/projects/software.png";
import yuboImg from "../../assets/images/projects/yubo.png";

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
        slidesToShow={window.innerWidth > 390 ? 3 : 1}
        shift={ window.innerWidth > 390 ? 50 : 90}
      >
        <div className={styles.card}>
          <img src={bellairImg} alt="fishImg" />
          <h3 className={styles.cardTitle}>Bellair Lase Clinic</h3>
          <p className={styles.cardText}>
            Web application for monitoring performance of beauty procedures
          </p>
        </div>
        <div className={styles.card}>
          <img src={bringlyImg} alt="closetImg" />
          <h3 className={styles.cardTitle}>Bringly</h3>
          <p className={styles.cardText}>
            Bringly is your one-stop solution for sustainable urban deliveries.
            As a platform, it enables you to ship products from wherever and
            ensure premium service levels.
          </p>
        </div>
        <div className={styles.card}>
          <img src={gamingImg} alt="xriteImg" />
          <h3 className={styles.cardTitle}>Gaming Mode</h3>
          <p className={styles.cardText}>
            Gaming Mode app is a solution for lag fix and bug fix. Play your
            favorite games with no lag. Use our game booster and enjoy the lag
            free gaming experience!
          </p>
        </div>
        <div className={styles.card}>
          <img src={softwareImg} alt="yabkoImg" />
          <h3 className={styles.cardTitle}>SoftwareDevCollective</h3>
          <p className={styles.cardText}>
            Discover top-rated sites to Hire Software Developers with the
            Expertise You Need for Your Next Project.
          </p>
        </div>
        <div className={styles.card}>
          <img src={yuboImg} alt="turwearImg" />
          <h3 className={styles.cardTitle}>Yubo</h3>
          <p className={styles.cardText}>
            Yubo is social video live-streaming app. Join the fun, chat, play
            games, and live stream.
          </p>
        </div>
      </Slider>
    </div>
  );
};
