import React from "react";
import styles from "./../../styles/membership/mainCardSection.module.css";
import MembershipSlider from "../subComponents/membershipSlider";
import Link from "next/link";
import Image from "next/image";

const MainCardSection = () => {
  const data = [
    {
      type: "RESERVE",
      bgImage: "./membership/reserve_bg.jpg",
      mainImage: "/membership/reserve_card.png",
      title: "reserve_card",
      membershipFees: "THB 5,000,000 ",
      membershipValidity: "20 Years ++",
      membershipPoints: "120 Points",
      data: [
        "./membership/reserve_img1.jpg",
        "./membership/reserve_img2.jpg",
        "./membership/reserve_img3.jpg",
        "./membership/reserve_img4.jpg",
        "./membership/reserve_img5.jpg",
        "./membership/reserve_img6.jpg",
      ],
    },
    {
      type: "DIAMOND",
      bgImage: "./membership/diamond_bg.jpg",
      mainImage: "/membership/diamond_card.png",
      title: "diamond_card",
      membershipFees: "THB 2,500,000 ",
      membershipValidity: "15 Years ++",
      membershipPoints: "55 Points",
      data: [
        "./membership/reserve_img1.jpg",
        "./membership/reserve_img2.jpg",
        "./membership/reserve_img3.jpg",
        "./membership/reserve_img4.jpg",
        "./membership/reserve_img5.jpg",
        "./membership/reserve_img6.jpg",
      ],
    },
    {
      type: "PLATINUM",
      bgImage: "./membership/platinum_bg.jpg",
      mainImage: "/membership/platinum_card.png",
      title: "platinum_card",
      membershipFees: "THB 1,500,000 ",
      membershipValidity: "10 Years ++",
      membershipPoints: "35 Points",
      data: [
        "./membership/reserve_img1.jpg",
        "./membership/reserve_img2.jpg",
        "./membership/reserve_img3.jpg",
        "./membership/reserve_img4.jpg",
        "./membership/reserve_img5.jpg",
        "./membership/reserve_img6.jpg",
      ],
    },
    {
      type: "GOLD",
      bgImage: "./membership/gold_bg.jpg",
      mainImage: "/membership/gold_card.png",
      title: "gold_card",
      membershipFees: "THB 900,000 ",
      membershipValidity: "5 Years ++",
      membershipPoints: "20 Points",
      data: [
        "./membership/reserve_img1.jpg",
        "./membership/reserve_img2.jpg",
        "./membership/reserve_img3.jpg",
        "./membership/reserve_img4.jpg",
        "./membership/reserve_img5.jpg",
        "./membership/reserve_img6.jpg",
      ],
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        {data.length &&
          data.map((item, index) => {
            return (
              <div
                className={styles.inner_container}
                key={index}
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                }}
              >
                <div className={`${styles.main_heading} ${styles[item.title]}`}>
                  <h2>{item.type}</h2>
                </div>
                <div className={styles.membership_card_image}>
                  <Image
                    src={item.mainImage}
                    alt={item.title}
                    width={457}
                    height={293}
                    layout="responsive"
                  />
                </div>
                <div className={styles.membership_card_desc}>
                  <div
                    className={`${styles.membership_fees}  ${
                      styles[item.title]
                    }`}
                  >
                    <p>Membership fee: </p>
                    <p>{item.membershipFees} </p>
                  </div>
                  <div className={styles.contactInfoDivider}></div>

                  <div
                    className={`${styles.membership_validity}  ${
                      styles[item.title]
                    }`}
                  >
                    <p>Validity: </p>
                    <p>{item.membershipValidity} </p>
                  </div>
                  <div className={styles.contactInfoDivider}></div>

                  <div
                    className={`${styles.membership_points}  ${
                      styles[item.title]
                    }`}
                  >
                    <p>Privilege points (per year):</p>
                    <p> {item.membershipPoints} </p>
                  </div>
                </div>

                <div className={styles.membership_button_container}>
                  <button className={styles.btn}>
                    <Link href="/contact">
                      {/* <svg
                        width="120px"
                        height="40px"
                        viewBox="0 0 180 60"
                        class="border"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="180"
                          height="60"
                          rx="7"
                          ry="7"
                          class="bg-line"
                        />
                        <rect
                          x="1"
                          y="1"
                          width="178"
                          height="58"
                          rx="7"
                          ry="7"
                          class="hl-line"
                        />
                      </svg> */}
                      <span>Get Free Assessment</span>
                    </Link>
                  </button>
                </div>
                {/* <div className={styles.membership_slider}>
                  <MembershipSlider imageProps={item.data} />
                </div> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MainCardSection;
