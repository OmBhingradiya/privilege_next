import React, { useEffect } from "react";
import styles from "./../../styles/membership/thirdSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const ThirdSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const data = [
    {
      svgUrl: "/membership/svg/1.svg",
      title: "Elite Personal Assistant (EPA)",
      desc: "Our staff will warmly welcome you upon arrival and departure, providing convenient airport services along with access to premium lanes at Suvarnabhumi, Phuket, and Chiang Mai airports.",
    },
    {
      svgUrl: "/membership/svg/2.svg",
      title: "Member Contact Center (MCC)",
      desc: "Dedicated to assisting in scheduling appointments and managing essential tasks, including 90-day reports, opening bank accounts, and applying for driving licenses.",
    },
    {
      svgUrl: "/membership/svg/3.svg",
      title: "Privileges & Seasonal Gifts",
      desc: "Access numerous exclusive privileges crafted exclusively for members and receive a unique present every season.",
    },
    {
      svgUrl: "/membership/svg/4.svg",
      title: "Elite Personal Liaison (EPL)",
      desc: "Dedicated to assisting in scheduling appointments and managing essential tasks, including 90-day reports, opening bank accounts, and applying for driving licenses.",
    },
    {
      svgUrl: "/membership/svg/5.svg",
      title: "Premium Lane",
      desc: "Ensure the utmost comfort for your arrival or departure with access to fast-track immigration at Suvarnabhumi, Phuket, and Chiang Mai airports.",
    },
    {
      svgUrl: "/membership/svg/6.svg",
      title: "Exclusive Services",
      desc: "Members will receive exclusive services, including airport assistance, limousine services, and wealth advisory.",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.main_heading} data-aos="zoom-in">
            <h2>YOUR FREEDOM OF ChOICES TO ENDLESS PRIVILEGES</h2>
          </div>
          <hr className={styles.main_hr} data-aos="zoom-in" />

          <div className={styles.main_container}>
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <div className={styles.main_box} key={index}>
                    <div className={styles.svg_box}>
                      <div className={styles.svg_div} data-aos="zoom-in">
                        <Image
                          src={item.svgUrl}
                          alt={item.title}
                          width={40}
                          height={40}
                          style={{
                            // width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className={styles.main_text_container}
                      data-aos="fade-right"
                    >
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
