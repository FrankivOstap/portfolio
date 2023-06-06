import React, { FC, useEffect, useState } from "react";
import styles from "./Contact.module.css";
import contactImg from "../../assets/images/contact.png";

type Props = {};

export const Contact: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.background} src={contactImg} />
      <h2 className={styles.title}>CONTACT US</h2>
      <div style={{ display: "flex", marginTop: 56 }}>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Ім'я" />
          <input className={styles.input} placeholder="Email" />
          <input className={styles.input} placeholder="Номер телефону" />
          <button className={styles.btn}>Submit</button>
        </form>
        <div className={styles.info}>
          <div style={{marginBottom: 24}}>
            <h3 className={styles.infoTitle}>Working hours</h3>
            <div style={{display: 'flex'}}>
              <div className={styles.schedule}>
                <span>Monday - Friday</span>
                <span>Saturday - Sunday</span>
              </div>
              <div className={styles.schedule}>
                <span>10 am - 6 pm</span>
                <span>by appointments only</span>
              </div>
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <div className={styles.contact}>
              <h3 className={styles.infoTitle}>Contact</h3>
              <span style={{marginBottom: 8}}>appexoft.it@gmail.com</span>
              <span>0938450985</span>
            </div>
            <div>
              <h3 className={styles.infoTitle}>Location</h3>
              <span>Lviv, Ukraine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
