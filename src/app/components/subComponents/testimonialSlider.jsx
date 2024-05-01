import React, { useState } from "react";
import styles from "./../../styles/testimonial.module.css";
import { GoStarFill } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const TestimonialSlider = () => {
  const [showPrevArrow, setShowPrevArrow] = useState(false);

  const testimonialData = [
    {
      imgUrl: "/TESTIMONIAL-1.png",
      reviewerName: "Jacob Jones",
      reviewerPost: "TOURIST",
      review:
        "Living in Thailand has granted me the privilege of experiencing a culture so rich and diverse. The warm hospitality, coupled with stunning landscapes, makes every day a unique and enriching journey.",
    },
    {
      imgUrl: "/TESTIMONIAL-2.png",
      reviewerName: "Robert Fox",
      reviewerPost: "TOURIST",
      review:
        "As an entrepreneur, the privileges of doing business in Thailand are unparalleled. The supportive business environment and access to a diverse market have significantly contributed to the success of my ventures.",
    },
    {
      imgUrl: "/TESTIMONIAL-3.png",
      reviewerName: "Krish Hawkins",
      reviewerPost: "TOURIST",
      review:
        "Being part of Thailand's expatriate community is a true privilege. The blend of affordability, cultural richness, and a welcoming atmosphere makes it a remarkable place to call home. Truly, living here feels like living in paradise.",
    },
  ];
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
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
  };

  const svgContainer1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="36"
      viewBox="0 0 32 36"
      fill="none"
    >
      <path d="M0.5 0.5L32 36H0.5V0.5Z" fill="#DABA96" />
    </svg>
  );
  const svgContainer2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="41"
      viewBox="0 0 84 41"
      fill="none"
    >
      <path d="M0 40.5L83.5 0H0V40.5Z" fill="#E2E1E1" />
    </svg>
  );

  return (
    <div className={styles.testimonialSection} id="testimonialSlider">
      <Slider {...settings}>
        {testimonialData.length > 0 &&
          testimonialData.map((item, index) => {
            return (
              <div key={index} className={styles.reviewerMainContainer}>
                <div className={styles.reviewContent}>
                  <div className={styles.reviewerImgMainDiv}>
                    <div className={styles.reviewerImgDiv}>
                      <Image
                        src={item.imgUrl}
                        className={styles.reviewerImg}
                        alt={item.reviewerName}
                        width={82}
                        height={82}
                        // style={{
                        //   width: "100%",
                        //   height: "auto",
                        // }}
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className={styles.reviewMainDiv}>
                    <div className={styles.starNameDiv}>
                      <div className={styles.reviewRateDiv}>
                        <GoStarFill
                          fill="#EFD9C0"
                          className={styles.reviewRate}
                        />
                        <GoStarFill
                          fill="#EFD9C0"
                          className={styles.reviewRate}
                        />
                        <GoStarFill
                          fill="#EFD9C0"
                          className={styles.reviewRate}
                        />
                        <GoStarFill
                          fill="#EFD9C0"
                          className={styles.reviewRate}
                        />
                        <GoStarFill
                          fill="#EFD9C0"
                          className={styles.reviewRate}
                        />
                      </div>
                      <div className={styles.reviewerNameMainDiv}>
                        <div className={styles.reviewerNameTopBlock}>
                          {svgContainer1}
                        </div>
                        <div className={styles.reviewerNameDiv}>
                          <div>
                            <h2 className={styles.reviewerName}>
                              {item.reviewerName}
                            </h2>
                            <p className={styles.reviewerPost}>
                              {item.reviewerPost}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className={styles.review}>{item.review}</p>
                    </div>
                  </div>
                  <div>{svgContainer2}</div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
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

export default TestimonialSlider;
