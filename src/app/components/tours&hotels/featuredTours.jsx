import React, { useEffect } from "react";
import styles from "./../../styles/tours&hotels/featuredTours.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const FeaturedTours = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const data = [
    {
      featuredTours_imageUrl: "/tours&hotel/featuredTours_1.webp",
      text: "SPLENDID LEISURE JOURNEY IN VIETNAM & THAILAND 17 DAYS 16 NIGHTS",
      link: "https://thaiunikatravel.com/tour/splendidleisurejourneyvietnamthailand",
    },
    {
      featuredTours_imageUrl: "/tours&hotel/featuredTours_2.webp",
      text: "HOME AWAY FROM HOME IN BANGKOK & PHU QUOC (12D11N)",
      link: "https://thaiunikatravel.com/tour/home-away-from-home-in-bangkok-phu-quoc",
    },
    {
      featuredTours_imageUrl: "/tours&hotel/featuredTours_3.webp",
      text: "UNSEEN SOUTHERN THAILAND 12 DAYS",
      link: "https://thaiunikatravel.com/tour/unseen-southern-thailand-12-days",
    },
    {
      featuredTours_imageUrl: "/tours&hotel/featuredTours_4.webp",
      text: "MAE HONG SON HIGHLAND LOOPS 15 DAYS",
      link: "https://thaiunikatravel.com/tour/mae-hong-son-highland-loops-15-days",
    },
    {
      featuredTours_imageUrl: "/tours&hotel/featuredTours_5.webp",
      text: "LESS VISITED THAILAND 17 DAYS 16 NIGHTS",
      link: "https://thaiunikatravel.com/tour/less-visited-thailand-17-days-16-nights",
    },
    {
      featuredTours_imageUrl: "/tours&hotel/featuredTours_6.webp",
      text: "NORTHERN OF THAILAND ADVENTURE 11 DAYS",
      link: "https://thaiunikatravel.com/tour/northern-of-thailand-adventure-11-days",
    },
  ];
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.main_heading}>
            <h2 data-aos="fade-down">FEATURED TOURS</h2>
          </div>
          <hr className={styles.main_hr} data-aos="fade-down" />
          <div className={styles.featuredTours_main_container}>
            {data.length &&
              data.map((item, index) => {
                return (
                  <div className={styles.featuredTours_box} key={index}>
                    <Link href={item.link} target="_blank">
                      <div className={styles.featuredTours_main_image}>
                        <Image
                          src={item.featuredTours_imageUrl}
                          alt="FEATURED TOURS"
                          width={477}
                          height={482}
                          layout="responsive"
                        />
                      </div>
                      <p>{item.text}</p>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTours;
