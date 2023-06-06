import React, { FC } from "react";
import styles from "./University.module.css";
type Props = {};

export const University: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.background}>UNIVERSITY</h2>
      <h2 className={styles.title}>APPEXOFT UNIVERSITY</h2>
      <p className={styles.text}>
        Appexoft University - місце, де ми не просто вчимо ІТ, ми творимо його
        майбутнє разом з вами! Наша мета - зробити з тебе повноцінного ІТ
        фахівця з актуальними навичками.Запишись на курси і розкрий свій
        потенціал.
      </p>
      <div style={{ display: "flex" }}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>React Native</h3>
          <h4 className={styles.cardSubtitle}>Безкоштовне стажування</h4>
          <p className={styles.cardText}>
            React Native - це безкоштовне стажування, для тих, хто прагне стати
            розробником мобільних додатків.
          </p>
          <div className={styles.cardInfoContainer}>
            <div className={styles.cardInfo}>
              <h4 className={styles.cardInfoTitle}>Базове знання React</h4>
              <h4 className={styles.cardInfoSubtitle}>Рівень знань</h4>
            </div>
            <div className={styles.cardInfo}>
              <h4 className={styles.cardInfoTitle}>Безкоштовно</h4>
              <h4 className={styles.cardInfoSubtitle}>Вартість</h4>
            </div>
          </div>
          <button className={styles.btn}>More</button>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>QA-тестування</h3>
          <h4 className={styles.cardSubtitle}>офлайн курс для початківців</h4>
          <p className={styles.cardText}>
            Quality Assurance: Practical Course — це навчальна програма, яка
            надає учасникам знання та навички, пов’язані із забезпеченням якості
            в різних галузях промисловості.
          </p>
          <div className={styles.cardInfoContainer}>
            <div className={styles.cardInfo}>
              <h4 className={styles.cardInfoTitle}>Початковий</h4>
              <h4 className={styles.cardInfoSubtitle}>Рівень знань</h4>
            </div>
            <div className={styles.cardInfo}>
              <h4 className={styles.cardInfoTitle}>5 червня 2023</h4>
              <h4 className={styles.cardInfoSubtitle}>Початок курсу</h4>
            </div>
          </div>
          <button className={styles.btn}>More</button>
        </div>
      </div>
    </div>
  );
};
