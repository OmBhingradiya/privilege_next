import React from "react";
import styles from "./../../styles/tours&hotels/bestSeller.module.css";
import Link from "next/link";
import Image from "next/image";

const BestSeller = () => {
  const data = [
    {
      imgUrl: "/tours&hotel/bestSeller_1.png",
      heading: "9 DAYS DISCOVERING BANGKOK AREA AND PHUKET BEACH",
      desc: "Open your horizons by taking part in an unforgettable journey through the vibrant and diverse landscapes of Thailand with this captivating tour.",
      duration: "9 days",
      link: "https://thaiunikatravel.com/tour/bangkok-phuket-9days",
    },
    {
      imgUrl: "/tours&hotel/bestSeller_2.png",
      heading: "16 DAYS THAILAND & LAOS VIA HUAY XAY BORDER",
      desc: "A 16-day tour in Thailand offers an exciting and immersive experience into the country’s culture, history, and natural wonders.",
      duration: "16 days",
      link: "https://thaiunikatravel.com/tour/16d-discovering-thailand-laos-via-huay-xay",
    },
    {
      imgUrl: "/tours&hotel/bestSeller_3.png",
      heading: "10 DAYS FROM BANGKOK TO SIEM REAP",
      desc: "The 10 Days From Bangkok to Siem Reap tour is an incredible opportunity to explore the beauty and culture of Thailand and Cambodia.",
      duration: "10 days",
      link: "https://thaiunikatravel.com/tour/10-days-from-bangkok-to-siem-reap",
    },
    {
      imgUrl: "/tours&hotel/bestSeller_4.png",
      heading: "AUTHENTIC THAILAND 21 DAYS 20 NIGHTS",
      desc: "Embark on an exhilarating 21-day adventure through the vibrant wonders of Thailand. This captivating tour begins with your arrival in Bangkok, a bustling metropolis where modernity coexists with ancient traditions.",
      duration: "21 days",
      link: "https://thaiunikatravel.com/tour/authentic-thailand-21-days-20-nights",
    },
    {
      imgUrl: "/tours&hotel/bestSeller_5.png",
      heading: "A GLIMPSE OF THAILAND 11 DAYS 10 NIGHTS",
      desc: "Experience the ultimate adventure with this thrilling 11-day tour through Thailand’s most captivating destinations.",
      duration: "11 days",
      link: "https://thaiunikatravel.com/tour/glimpse-thailand-11-days",
    },
    {
      imgUrl: "/tours&hotel/bestSeller_6.png",
      heading: "7 DAYS EXPLORING THAILAND CENTER",
      desc: "This 7-day tour offers a perfect blend of natural and cultural experiences, showcasing the highlights of Thailand’s capital city.",
      duration: "7 days",
      link: "https://thaiunikatravel.com/tour/7-day-exploring-thailand-center",
    },
    {
      imgUrl: "/tours&hotel/bestSeller_7.png",
      heading: "BANGKOK CITY TOUR",
      desc: "Explore Bangkok's rich heritage on a captivating city tour. Visit iconic temples like Wat Pho and Wat Arun, marveling at their intricate architecture.",
      link: "https://redfox.travel/destinations/thailand",
    },
    {
      imgUrl: "/tours&hotel/bestSeller_8.png",
      heading: "CHAING MAI CITY TOUR",
      desc: "Discover Northern Thailand's cultural heart with ancient temples like Wat Phra Singh and Wat Chedi Luang.",
      link: "https://redfox.travel/destinations/thailand",
    },
    {
      imgUrl: "/tours&hotel/bestSeller_9.png",
      heading: "PHUKET BEACH TRIPS",
      desc: "Embark on a journey through Thailand's tropical paradise. Explore pristine beaches like Patong and Karon, where turquoise waters meet powdery sand.",
      link: "https://redfox.travel/destinations/thailand",
    },
  ];
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.main_heading}>
            <h2>BEST SELLER</h2>
          </div>
          <hr className={styles.main_hr} />
          <div className={styles.bestSeller_main_container}>
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <div className={styles.bestSeller_box} key={index}>
                    <Link href={item.link} target="_blank">
                      <div className={styles.bestSeller_imageText}>
                        <div className={styles.bestSeller_image}>
                          <div className={styles.shadow}> </div>
                          <Image
                            src={item.imgUrl}
                            alt={item.heading}
                            width={476}
                            height={562}
                            layout="responsive"
                          />
                        </div>

                        <div className={styles.bestSeller_des}>
                          <h2>{item.heading} </h2>
                          {/* <p>Duration: 7 Days</p> */}
                          <p className={styles.bestSeller_text}>{item.desc}</p>
                        </div>
                      </div>
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

export default BestSeller;
