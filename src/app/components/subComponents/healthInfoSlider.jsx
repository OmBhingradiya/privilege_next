import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./../../styles/newsSection.module.css";
import { MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";

const data = [
  {
    title: "Pneumonia Vaccination: Increase Your Immunity Before It’s Too Late",
    imgUrl: "/bankok_hospital/healthInfo1.png",
    description:
      "Pneumonia, if left untreated, can be fatal.  So, vaccination against pneumonia is something that should not be neglected, particularly by those over 65 whose immunity is already waning. Should they contract pneumonia and it becomes severe, they can experience life-threatening complications.",
    link: "https://www.bangkokhospital.com/en/content/pneumococcal-vaccine",
  },
  {
    title: "What You Should Know Before Upper Abdominal Endoscopy",
    imgUrl: "/bankok_hospital/healthInfo2.png",
    description:
      "If you experience consistent upper abdominal pain as well as other abnormalities in your digestive system, you need to have upper endoscopic examination to determine, evaluate and treat your problems from an early stage so you restore your quality of life right away.",
    link: "https://www.bangkokhospital.com/en/content/before-endoscopy-to-examine-the-upper-digestive-tract",
  },
  {
    title: "Hormones Therapy: How Much Is Enough?",
    imgUrl: "/bankok_hospital/healthInfo3.png",
    description:
      "Hormones Therapy: How Much Is Enough? Share Hormones replacement therapy is very popular among trans and gender-diverse persons. But many people neglect their hormone intake or take it inconsistently which will have negative impact on them in the long run.",
    link: "https://www.bangkokhospital.com/en/content/how-to-take-hormones-to-suit-yourself",
  },
  {
    title: "Pneumonia Vaccination: Increase Your Immunity Before It’s Too Late",
    imgUrl: "/bankok_hospital/healthInfo1.png",
    description:
      "Pneumonia, if left untreated, can be fatal.  So, vaccination against pneumonia is something that should not be neglected, particularly by those over 65 whose immunity is already waning. Should they contract pneumonia and it becomes severe, they can experience life-threatening complications.",
    link: "https://www.bangkokhospital.com/en/content/pneumococcal-vaccine",
  },
];

const HealthInfoSlider = () => {
  const [showPrevArrow, setShowPrevArrow] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: () => setShowPrevArrow(true),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.health_section} id="news_slider">
        <div className={styles.health_viewAll}>
          <p>
            View All{" "}
            <span className={styles.health_rightArrow}>
              <HiOutlineArrowRight />
            </span>
          </p>
        </div>
        <Slider {...settings}>
          {data.length > 0 &&
            data.map((item, index) => {
              return (
                <div key={index} className={styles.main_newsSection}>
                  <div className={styles.health_inner_newsSection}>
                    <div className={styles.health_content}>
                      <div className={styles.news_image}>
                        <Image
                          src={item.imgUrl}
                          alt="promotion image"
                          width={420}
                          height={324}
                          // style={{
                          //   width: "100%",
                          //   height: "auto",
                          // }}
                          layout="responsive"
                        />
                      </div>
                      <div className={styles.health_shadow}></div>
                      <div className={styles.health_heading}>
                        <p>{item.title}</p>
                      </div>
                    </div>
                    <div className={styles.health_textAndButton}>
                      <p className={styles.health_text}>{item.description}</p>
                      <div className={styles.health_button_container}>
                        <Link
                          href={item.link}
                          target="_blank"
                          aria-label={`Read more about ${item.description}`}
                        >
                          <p className={styles.health_button_text}>
                            Read more
                            <span className={styles.health_rightArrow}>
                              <HiOutlineArrowRight />
                            </span>
                            <span
                              className={styles.visually_hidden}
                            >{`Read more about ${item.description}`}</span>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: `linear-gradient(101deg, #ac8d71 0%, #fce7cf 50.5%, #d7bea0 100%)`,
          // padding: "3px",
          // borderRadius: "50%",
          background: `url("./next.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${showPrevArrow ? "" : "hidden"}`}
        style={{
          ...style,
          display: "block",
          // background: `linear-gradient(101deg, #ac8d71 0%, #fce7cf 50.5%, #d7bea0 100%)`,
          // padding: "3px",
          // background: "#dfc7ab",
          // fontSize: "20px",
          // borderRadius: "50%",
          background: `url("./prev.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        onClick={onClick}
      />
    );
  }
};

export default HealthInfoSlider;
