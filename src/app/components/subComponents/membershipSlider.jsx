import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./../../styles/membership/mainCardSection.module.css";
const MembershipSlider = ({ imageProps }) => {
  var settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "60px",
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
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
    <div className={styles.membership_slider_container} id="membership_slider">
      <Slider {...settings}>
        {imageProps.length &&
          imageProps.map((item, index) => {
            return (
              <div className={styles.slider_image_container} key={index}>
                <img
                  src={item}
                  alt="images of reserve's"
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default MembershipSlider;
