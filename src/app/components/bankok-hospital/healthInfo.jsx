import React from "react";
import styles from "./../../styles/bankok-hospital/healthInfo.module.css";
import HealthInfoSlider from "../subComponents/healthInfoSlider";

const HealthInfo = () => {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.inner_container}>
            <div className={styles.first_container}>
              <div className={styles.main_heading}>
                <h2 data-aos="fade-down">Health Info</h2>
              </div>
              <hr className={styles.main_hr} data-aos="fade-down" />

              <div className={styles.main_container}>
                <HealthInfoSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthInfo;
