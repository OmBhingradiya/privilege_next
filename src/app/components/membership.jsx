import React, { useEffect, useState } from "react";
import styles from "../styles/membership.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    id: 1,
    imageUrl: "/reserve_card.png",
    invitation: "By invitation only",
    title: "RESERVE",
    membershipFees: "THB 5,000,000",
    validity: "20 Years ++",
    points: "120 Points",
    alt: "Elite Visa",
    link: "https://www.thailandprivilege.co.th/membership/reserve",
  },
  {
    id: 2,
    imageUrl: "/diamond_card.png",
    invitation: "",
    title: "DIAMOND",
    membershipFees: "THB 2,500,000",
    validity: "15 Year",
    points: "55 Points",
    alt: "Thailand Long Stay Visa",
    link: "https://www.thailandprivilege.co.th/membership/diamond",
  },
  {
    id: 3,
    imageUrl: "/platinum_card.png",
    invitation: "",
    title: "PLATINUM",
    membershipFees: "THB 1,500,000",
    validity: "10 Year",
    points: "35 Points",
    alt: "Thailand Elite Privilege Visa",
    link: "https://www.thailandprivilege.co.th/membership/platinum",
  },
  {
    id: 4,
    imageUrl: "/gold_card.png",
    invitation: "",
    title: "GOLD",
    membershipFees: "THB 900,000",
    validity: "5 Year",
    points: "20 Points",
    alt: "Golden Visa",
    link: "https://www.thailandprivilege.co.th/membership/gold",
  },
];

const Membership = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const [activeCard, setActiveCard] = useState(cards[0].id);

  const [hoveredBox, setHoveredBox] = useState(null);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "-25%", // Adjust this value to control the amount of partial visibility
  //   responsive: [
  //     {
  //       breakpoint: 1131,
  //       settings: {
  //         slidesToShow: 3,
  //         centerPadding: "-10%", // Adjust center padding for smaller screens
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         centerPadding: "-10%", // Adjust center padding for smaller screens
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "-10%", // Adjust center padding for smaller screens
  //       },
  //     },
  //   ],
  // };

  const onMouseEnter = (id) => {
    setActiveCard(id);
  };
  const onMouseLeave = () => setHoveredBox(null);

  const isAdjacent = (hoveredId, currentId) => {
    return Math.abs(hoveredId - currentId) === 1;
  };

  // Function to determine if a box is distant from the hovered box
  const isDistant = (hoveredId, currentId) => {
    return Math.abs(hoveredId - currentId) > 1;
  };
  const getBoxClass = (id) => {
    if (hoveredBox === id) return styles.boxHover;
    if (hoveredBox !== null && isAdjacent(hoveredBox, id))
      return styles.adjacentBox;
    if (hoveredBox !== null && isDistant(hoveredBox, id))
      return styles.distantBox;
    return "";
  };
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading} data-aos="fade-down">
          EXPLORE OUR THAILAND PRIVILEGE CARD MEMBERSHIP PACKAGES FOR A LIFE OF
          LUXURY IN THAILAND
        </h2>
        <hr className={styles.heading_hr} />
        <p className={styles.sub_heading} data-aos="fade-down">
          Authorized Agent for Thailand Privilege Visa Card Co. in Partnership
          with the Ministry of Tourism and Sports (TAT).
        </p>
      </div>
      <div className={styles.membershipContainer}>
        {/* {window.innerWidth <= 1130 ? (
          <Slider {...settings}>
            {cards.map((card) => 
              {
                return(

              <div
                key={card.id}
                className={`${styles.membershipCard} ${
                  activeCard === card.id ? styles.active : ""
                }`}
                onMouseEnter={() => handleMouseEnter(card.id)}
              >

            {card.invitation ? (
              <p className={styles.invitation}>BY INVITATION ONLY</p>
            ) : (
              <p></p>
            )}

            <h3 className={styles.title}>{card.title}</h3>
            <div>

            <img src={card.imageUrl} alt={card.title} style={{width:"100%"}} />
            </div>
            <div className={styles.cardInfo}>
              <p className={styles.membershipFees}>
                <span className={styles.card_span}>Membership Fees: </span>
                {card.membershipFees}
              </p>
              <p className={styles.membershipFees}>
                <span className={styles.card_span}> Validity: </span>
                {card.validity}
              </p>
              <p className={styles.membershipFees}>
                <span className={styles.card_span}>Privilege points: </span>
                {card.points}
              </p>
              <div>
                <hr className={styles.hr} />
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button}>Discover More</button>
            </div>
      </div>
                )

})}
          </Slider>)
          : */}
        {cards.length > 0 &&
          cards.map((card, id) => {
            return (
              <div
                key={card.id}
                className={`${styles.membershipCard} ${getBoxClass(id)} 
                
                `}
                onMouseEnter={() => setHoveredBox(id)}
              >
                {card.invitation ? (
                  <p className={styles.invitation}>BY INVITATION ONLY</p>
                ) : (
                  <p></p>
                )}

                <h3 className={styles.title}>{card.title}</h3>
                <Image
                  src={card.imageUrl}
                  alt={card.alt}
                  width={358}
                  height={229}
                  // style={{
                  //   width: "100%",
                  //   height: "auto",
                  // }}
                  layout="responsive"
                />
                <div className={styles.cardInfo}>
                  <p className={styles.membershipFees}>
                    <span className={styles.card_span}>Membership Fees: </span>
                    {card.membershipFees}
                  </p>
                  <p className={styles.membershipFees}>
                    <span className={styles.card_span}> Validity: </span>
                    {card.validity}
                  </p>
                  <p className={styles.membershipFees}>
                    <span className={styles.card_span}>Privilege points: </span>
                    {card.points}
                  </p>
                  <div>
                    <hr className={styles.hr} />
                  </div>
                </div>
                <div className={styles.buttonDiv}>
                  <button className={styles.btn}>
                    <Link href={card.link} target="_blank">
                      <svg
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
                      </svg>
                      <span>Discover More</span>
                    </Link>
                  </button>
                  {/* <button className={styles.button}>Discover More</button> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Membership;
