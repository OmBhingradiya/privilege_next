import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import styles from "./../../styles/about.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const AboutSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  var settings1 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: nav2,
    ref: slider1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: nav1,
    ref: slider2,
    // swipeToSlide: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,

    cssEase: "linear",

    responsipropertyve: [
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
    <div style={{ padding: "30px 0" }} className={styles.aboutSliderMainDiv}>
      <div className={styles.line}></div>
      <div className={styles.svg_div}>
        <Slider {...settings1} id="aboutSlider_mainSection">
          <div className={styles.svg_box}>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="19"
                fill="#DFC7AB"
                stroke="white"
                stroke-width="3"
                stroke-dasharray="2 2"
              />
            </svg>
          </div>
          <div className={styles.svg_box}>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="19"
                fill="#DFC7AB"
                stroke="white"
                stroke-width="3"
                stroke-dasharray="2 2"
              />
            </svg>
          </div>
          <div className={styles.svg_box}>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="19"
                fill="#DFC7AB"
                stroke="white"
                stroke-width="3"
                stroke-dasharray="2 2"
              />
            </svg>
          </div>
          <div className={styles.svg_box}>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="19"
                fill="#DFC7AB"
                stroke="white"
                stroke-width="3"
                stroke-dasharray="2 2"
              />
            </svg>
          </div>
          <div className={styles.svg_box}>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="19"
                fill="#DFC7AB"
                stroke="white"
                stroke-width="3"
                stroke-dasharray="2 2"
              />
            </svg>
          </div>
          <div className={styles.svg_box}>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="19"
                fill="#DFC7AB"
                stroke="white"
                stroke-width="3"
                stroke-dasharray="2 2"
              />
            </svg>
          </div>
        </Slider>
      </div>
      <div id="mileStoneSlider">
        <Slider {...settings2}>
          <div>
            <div className={styles.listItemSlideDiv}>
              <div className={styles.slider_year}>
                <p className="slideYear">2003</p>
              </div>
              <div className="milestoneSliderImgText">
                <div className={styles.slider_image_container}>
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider1.webp"
                  />
                </div>
                <div className={styles.text_container}>
                  <ul className="slideDescriDetail">
                    <li>
                      Officially launched Thailand Privilege card project.
                    </li>
                    <li>
                      Marketed Individual and Corporate visa privilege cards.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.listItemSlideDiv}>
              <div className={styles.slider_year}>
                <p className="slideYear">2013</p>
              </div>
              <div className="milestoneSliderImgText">
                <div className={styles.slider_image_container}>
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider2.webp"
                  />
                </div>
                <div className={styles.text_container}>
                  <ul className="slideDescriDetail">
                    <li>
                      Released ‘Privilege Entry Visa (PE)–the first exclusive
                      tourist visa.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.listItemSlideDiv}>
              <div className={styles.slider_year}>
                <p className="slideYear">2018</p>
              </div>
              <div className="milestoneSliderImgText">
                <div className={styles.slider_image_container}>
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider3.webp"
                  />
                </div>
                <div className={styles.text_container}>
                  <ul className="slideDescriDetail">
                    <li>
                      Specially launched a Wild Boar collection membership
                      card-Elite Friend of Thailand.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.listItemSlideDiv}>
              <div className={styles.slider_year}>
                <p className="slideYear">2019</p>
              </div>
              <div className="milestoneSliderImgText">
                <div className={styles.slider_image_container}>
                  {/* <Image alt="Our More Info"  
                        width={572}
                        height={363}
       
                        layout="responsive"
                    
                       src="/about_slider1.jpg"  /> */}
                </div>
                <div className={styles.text_container}>
                  <ul className="slideDescriDetail">
                    <li>
                      Ranked fourth out of 20 countries in the Global Residence
                      Program Index 2018-2019.
                    </li>
                    <li>
                      Posted revenues of 1,300 million baht from global sales of
                      membership.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.listItemSlideDiv}>
              <div className={styles.slider_year}>
                <p className="slideYear">2020</p>
              </div>
              <div className="milestoneSliderImgText">
                <div
                  className={`${styles.slider_image_container} ${styles.slider_2020_container}`}
                >
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider4.webp"
                  />
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider5.webp"
                  />
                </div>
                <div className={styles.text_container}>
                  <ul className="slideDescriDetail">
                    <li>
                      Showed a steady business growth with an increase of
                      membership to 10,134.
                    </li>
                    <li>
                      Restructured and redesigned marketing strategies in
                      response to COVID-19.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.listItemSlideDiv}>
              <div className={styles.slider_year}>
                <p className="slideYear">2023</p>
              </div>
              <div className="milestoneSliderImgText">
                <div
                  className={` ${styles.slider_image_container}   ${styles.slider_2020_container}`}
                >
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider6.webp"
                  />
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider7.webp"
                  />
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider8.webp"
                  />
                  <Image
                    alt="Our More Info"
                    width={572}
                    height={363}
                    layout="responsive"
                    src="/aboutSlider/about_slider9.webp"
                  />
                </div>
                <div className={styles.text_container}>
                  <ul className="slideDescriDetail">
                    <li>
                      Showed a steady business growth with an increase of
                      membership to 10,134.
                    </li>
                    <li>
                      Restructured and redesigned marketing strategies in
                      response to COVID-19.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutSlider;
