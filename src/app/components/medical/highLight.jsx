import React, { useEffect } from "react";
import styles from "./../../styles/medical/highLight.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const HighLight = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const data = [
    {
      imageUrl: "./medical/Rectangle 138.jpg",
      name: "medical images",
      description:
        "Fight to the end... The cancer has spread to the lungs, chemo and immunotherapy are administered.",
    },
    {
      imageUrl: "./medical/Rectangle 139.jpg",
      name: "medical images",
      description: "MedPark is JCI certified.",
    },
    {
      imageUrl: "./medical/Rectangle 140.jpg",
      name: "medical images",
      description:
        "MedPark Ranked among the best hospitals in Thailand according to a survey by Newsweek.",
    },
    {
      imageUrl: "./medical/Rectangle 147.jpg",
      name: "medical images",
      description:
        "More than love is sacrifice,” a couple recounts their experience of a kidney transplant, giving them a new life in their original body “.",
    },
    {
      imageUrl: "./medical/Rectangle 148.jpg",
      name: "medical images",
      description:
        "MedPark Wins IBCLC Care Award 2023, Reinforcing the Potential of “ Breastfeeding Clinic “.",
    },
    {
      imageUrl: "./medical/Rectangle 149.jpg",
      name: "medical images",
      description:
        "Every surgery we perform for our patients is intended to be a masterpiece.",
    },
    {
      imageUrl: "./medical/Rectangle 153.jpg",
      name: "medical images",
      description: "Fit Kids Fit Family.",
    },
    {
      imageUrl: "./medical/Rectangle 154.jpg",
      name: "medical images",
      description: "Child Growth Assessment Package.",
    },
    {
      imageUrl: "./medical/Rectangle 155.jpg",
      name: "medical images",
      description: "Personalized oral and dental check-up packages.",
    },
    {
      imageUrl: "./medical/Rectangle 159.jpg",
      name: "medical images",
      description:
        "Cardiac catheterization injection Coronary artery stenosis Timely treatment before a heart attack.",
    },
    {
      imageUrl: "./medical/Rectangle 160.jpg",
      name: "medical images",
      description: "Obsessive-compulsive disorder (OCD).",
    },
    {
      imageUrl: "./medical/Rectangle 161.jpg",
      name: "medical images",
      description: "Snoring.",
    },
  ];
  const dataFinal = [
    {
      name: "Highlight",
      data: [
        {
          imageUrl: "/medical/1.png",
          name: "medical images",
          title:
            "Battling until the very last moment: A fusion of Chemotherapy and Immunotherapy for Metastatic Breast Cancer to the Lung",
          description:
            "he means the world to me. My solemn commitment is to offer her nothing less than the finest care, ensuring that she experiences a life brimming with joy and that she remains with us for as long as fate permits.",
          link: "https://www.medparkhospital.com/en-US/medpark-stories/metastatic-breast-cancer-to-the-lung",
        },
        {
          imageUrl: "/medical/2.png",
          name: "medical images",
          title: "MedPark Hospital Achieves JCI Accreditation",
          description:
            "MedPark Hospital Achieves JCI 7th Edition Accreditation, Demonstrating Commitment to International Quality and Safety Standards",
          link: "https://www.medparkhospital.com/en-US/news/jci-accreditation",
        },
        {
          imageUrl: "/medical/3.png",
          name: "medical images",
          title:
            "MedPark ranked as a Thailand's top hospital for three consecutive years by Newsweek.",
          description:
            "Ranked among the top hospitals in Thailand in 2024 by Newsweek, MedPark Hospital has earned its place through rigorous evaluation of 2,400 hospitals in 30 countries.",
          link: "https://www.medparkhospital.com/en-US/news/thailands-best-hospitals-2024-by-newsweek",
        },
        {
          imageUrl: "/medical/4.png",
          name: "medical images",
          title:
            "“Sacrifice for love” A couple shares their kidney transplantation experience. A new life under the same skin.",
          description:
            "Between a father and child related by bloodline, compatibility is more likely. As for me and my wife, there was a high chance of incompatibility.",
          link: "https://www.medparkhospital.com/en-US/medpark-stories/patient-story-kidney-transplantation",
        },
        {
          imageUrl: "/medical/5.png",
          name: "medical images",
          title:
            "MedPark Hospital Garners IBCLC Care Award 2023, Reinforcing Leadership in “Breastfeeding Clinic”.",
          description:
            "'- MedPark Hospital has received the prestigious IBCLC Care Award 2023, cementing its position as a leading institution committed to providing exceptional breastfeeding care.",
          link: "https://www.medparkhospital.com/en-US/news/ibclc-care-award-2023",
        },
        {
          imageUrl: "/medical/6.png",
          name: "medical images",
          title: "I’m determined to make every surgery a masterpiece.",
          description:
            "Eye surgery is not just a treatment for eye problems; it is to bring happiness into a patient’s life. Considering each patient has different needs and lifestyles, the priority is to discern",
          link: "https://medparkhospital.com/en-US/medpark-stories/assoc-prof-dr-prin-rojanapongpun-2",
        },
      ],
    },

    {
      name: "Packages & Promotions",
      data: [
        {
          imageUrl: "/medical/7.png",
          name: "medical images",
          title: "SMILE® pro Package",
          description:
            "SMILE® pro The Most Modern Treatment for Myopia and Astigmatism",
          link: "https://www.medparkhospital.com/en-US/packages/smilepro",
        },
        {
          imageUrl: "/medical/8.png",
          name: "medical images",
          title: "SMILE® pro Eye Screening Package",
          description: "",
          link: "https://www.medparkhospital.com/en-US/packages/smilepro-eye-screening-package",
        },
        {
          imageUrl: "/medical/9.png",
          name: "medical images",
          title: "Growth assessment package",
          description: "",
          link: "https://www.medparkhospital.com/en-US/packages/growth-assessment",
        },
      ],
    },

    {
      name: "Disease & Treatment",
      data: [
        {
          imageUrl: "/medical/10.png",
          name: "medical images",
          title: "Pericarditis",
          description:
            "Pericarditis is the inflammation and swelling of the thin saclike tissue known as the pericardium, which encases the heart. This condition can lead to sharp shooting chest pain stemming from the friction of irritated pericardium.",
          link: "https://www.medparkhospital.com/en-US/disease-and-treatment/pericarditis",
        },
        {
          imageUrl: "/medical/11.png",
          name: "medical images",
          title: "Nasal Polyps",
          description:
            "Nasal polyps are noncancerous growths in the nose or sinuses. While they are typically painless, larger polyps or clusters of polyps can obstruct nasal passages, causing breathing difficulties, nasal congestion",
          link: "https://www.medparkhospital.com/en-US/disease-and-treatment/nasal-polyps",
        },
        {
          imageUrl: "/medical/12.png",
          name: "medical images",
          title: "Hypercalcemia",
          description:
            "Hypercalcemia is a state of high calcium levels in your blood. Primary hyperparathyroidism, vitamin D toxicity, certain cancers, diseases, and medications can cause the condition. Treatment of hypercalcemia may involve medication or surgery..",
          link: "https://www.medparkhospital.com/en-US/disease-and-treatment/hypercalcemia",
        },
      ],
    },
  ];

  const categoryUrls = {
    "Packages & Promotions": "https://www.medparkhospital.com/en-US/packages",
    "Disease & Treatment":
      "https://www.medparkhospital.com/en-US/disease-and-treatment",
  };
  // const svg = (
  //   <svg
  //     width="58"
  //     height="47"
  //     viewBox="0 0 58 47"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       d="M46.8483 21.9792L46.8494 22.0016L47.2277 30.2454C47.375 33.3601 44.9643 36.0112 41.8607 36.1548L31.0809 36.6536C30.0317 36.6382 28.9858 36.693 27.9838 36.8002C26.106 36.9894 24.3475 37.3458 22.8705 37.7244C23.1097 36.2133 23.301 34.4262 23.3185 32.532L23.1745 29.4203L22.6705 18.5981C22.6008 17.0917 23.1234 15.6442 24.136 14.5259C25.1487 13.4108 26.5364 12.7549 28.0374 12.6855L36.2509 12.3022C36.2542 12.3052 36.2542 12.3052 36.2542 12.3052L36.2795 12.3008L36.1815 9.21898L27.8947 9.60247C25.5702 9.71005 23.4309 10.7206 21.8632 12.4467C20.2956 14.1727 19.4906 16.4041 19.5986 18.737L19.9722 29.5653C19.9724 29.5685 19.9724 29.5685 19.9727 29.5749C20.1075 30.8352 20.1402 32.0938 20.1035 33.2981C20.1073 33.3107 20.1044 33.3172 20.1049 33.3268C20.0456 35.3509 19.7949 37.2335 19.5206 38.743C19.1431 40.8458 18.7136 42.2378 18.6859 42.3286C18.7703 42.2927 20.1116 41.7349 22.1657 41.1569C23.6319 40.75 25.4574 40.3265 27.4473 40.0809C27.4473 40.0809 27.4473 40.0809 27.4505 40.0807C28.6608 39.9288 29.9315 39.8444 31.2166 39.8617C31.2198 39.8615 31.2198 39.8615 31.2261 39.8612L42.0032 39.2346C44.3277 39.127 46.467 38.1165 48.0347 36.3904C49.6023 34.6643 50.4073 32.433 50.2993 30.1L49.9147 21.7894L46.8483 21.9792Z"
  //       fill="url(#paint0_linear_345_516)"
  //     />
  //     <path
  //       d="M56.1443 18.3479L55.6344 7.2605L54.4167 7.32006C52.3241 7.4137 50.4685 8.35672 49.1587 9.80221C47.8488 11.2445 47.0847 13.1861 47.1818 15.2861L47.4882 21.9053L42.5019 22.1328L42.5024 22.1424C40.1439 22.2739 37.9046 22.707 36.0907 23.1747C36.4086 21.161 36.6464 18.6553 36.4949 16.0717L36.5045 16.0712L36.3008 11.6702L42.8959 11.365C44.9881 11.265 46.8439 10.3251 48.1538 8.88283C49.4668 7.43719 50.2278 5.49576 50.1307 3.39895L50.074 2.17341L39.0272 2.68783C35.9556 2.83318 33.5753 5.45401 33.7178 8.53381L33.7552 9.34125C33.7552 9.34125 34.0294 16.851 34.0292 16.915C34.046 19.62 33.6882 22.1473 33.3243 23.9936C32.977 25.7847 32.6195 26.9431 32.5946 27.0242C32.6728 26.9918 33.7889 26.5275 35.5338 26.015C37.3163 25.488 39.762 24.9014 42.4183 24.6634C42.4246 24.6631 47.5978 24.3437 47.5978 24.3437L47.598 24.3469L47.601 24.3436L50.0368 24.2308L50.838 24.1906C52.3262 24.1217 53.7016 23.4759 54.7021 22.371C55.6997 21.2726 56.2134 19.8415 56.1443 18.3479ZM36.1845 9.22564L36.1471 8.41819C36.0669 6.68521 37.4072 5.20952 39.1369 5.12628L47.6049 4.7344C47.1597 7.02582 45.2025 8.80511 42.7796 8.92044L36.1845 9.22564ZM50.7219 21.7524L49.9208 21.7927L49.6144 15.1735C49.5051 12.7414 51.0895 10.6212 53.3217 9.96457L53.7118 18.4637C53.7507 19.3031 53.4598 20.1097 52.899 20.7305C52.3317 21.3485 51.5583 21.7137 50.7219 21.7524Z"
  //       fill="url(#paint1_linear_345_516)"
  //     />
  //     <defs>
  //       <linearGradient
  //         id="paint0_linear_345_516"
  //         x1="12.2795"
  //         y1="50.482"
  //         x2="44.4057"
  //         y2="13.8308"
  //         gradientUnits="userSpaceOnUse"
  //       >
  //         <stop offset="0.0722" stop-color="#723D1D" />
  //         <stop offset="0.3782" stop-color="#C9A551" />
  //         <stop offset="0.6744" stop-color="#FFE37B" />
  //         <stop offset="0.8398" stop-color="#C9A551" />
  //         <stop offset="1" stop-color="#723D1D" />
  //       </linearGradient>
  //       <linearGradient
  //         id="paint1_linear_345_516"
  //         x1="31.0913"
  //         y1="28.375"
  //         x2="62.2193"
  //         y2="-4.96669"
  //         gradientUnits="userSpaceOnUse"
  //       >
  //         <stop stop-color="#AD714D" />
  //         <stop offset="0.2115" stop-color="#C9A551" />
  //         <stop offset="0.27" stop-color="#DEBD61" />
  //         <stop offset="0.5479" stop-color="#FFE37B" />
  //         <stop offset="0.696" stop-color="#C9A551" />
  //         <stop offset="0.797" stop-color="#723D1D" />
  //       </linearGradient>
  //     </defs>
  //   </svg>
  // );

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.headingH2} data-aos="fade-up">
          Highlight
        </h2>
        <hr className={styles.hr} />
      </div>
      <div className={styles.all_highlight}>
        {dataFinal.length > 0 &&
          dataFinal.map((category, index) => {
            return (
              <div
                className={styles.highlight_box}
                key={index}
                data-aos="fade-down"
              >
                <div className={styles.category_textButton}>
                  <div className={styles.category_text_container}>
                    <p>{category.name}</p>
                  </div>
                  {category.name !== "Highlight" && (
                    <div className={styles.category_button_container}>
                      <Link
                        href={categoryUrls[category.name]}
                        target="_blank"
                        className={styles.link_container}
                        aria-label={`Read more about ${
                          categoryUrls[category.name]
                        }`}
                      >
                        <button className={styles.category_button}>
                          View All
                        </button>
                        <div className={styles.svg_container}>
                          <Image
                            src="/medical/viewAllArrow.svg"
                            alt="View All Arrow"
                            className={styles.svgPath}
                            width={18}
                            height={18}
                            layout="responsive"
                          />
                        </div>
                        {/* <svg
                        width="30"
                        height="8"
                        viewBox="0 0 40 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.svgIcon}
                      >
                        <path
                          d="M39.3536 4.35355C39.5488 4.15829 39.5488 3.84171 39.3536 3.64644L36.1716 0.464463C35.9763 0.269201 35.6597 0.269201 35.4645 0.464463C35.2692 0.659725 35.2692 0.976308 35.4645 1.17157L38.2929 4L35.4645 6.82842C35.2692 7.02369 35.2692 7.34027 35.4645 7.53553C35.6597 7.73079 35.9763 7.73079 36.1716 7.53553L39.3536 4.35355ZM4.37114e-08 4.5L39 4.5L39 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                          fill="#AD8E72"
                          className={styles.svgPath}
                        />
                      </svg> */}
                      </Link>
                    </div>
                  )}
                </div>
                {/* <div className={styles.hightlight_svg}>{svg}</div> */}
                <div className={styles.boxContainer}>
                  {category.data.map((item, index) => {
                    return (
                      <div key={index} className={styles.box}>
                        <Link
                          href={item.link}
                          target="_blank"
                          className={styles.linkContainer}
                          aria-label={`Read more about ${item.link}`}
                        >
                          <div className={styles.highlight_image}>
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              width={414}
                              height={408}
                              layout="responsive"
                            />
                          </div>

                          <div className={styles.highlight_text_bg}>
                            <p
                              className={
                                //   `${
                                //   category.name === "Disease & Treatment" &&
                                styles.different_font
                                // } ${

                                // styles.highlight_tex
                                // }`
                              }
                            >
                              {item.title}
                            </p>
                          </div>
                          <div className={styles.hovered_container}>
                            <p className={styles.hovered_title}>{item.title}</p>
                            <p className={styles.hovered_desc}>
                              {item.description}
                            </p>
                            <div className={styles.btn_container}>
                              <button className={styles.btn}>
                                <Link
                                  href="https://www.medparkhospital.com/en-US/about-us"
                                  aria-label="About Medpark Hospital"
                                  target="_blank"
                                >
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
                                  <span>Read More</span>
                                </Link>
                              </button>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

        {/* <div className={styles.button_container}>
          <button className={styles.btn}>
            <Link
              href="https://www.medparkhospital.com/en-US/disease-and-treatment"
              target="_"
            >
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
              <span>More Details</span>
            </Link>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HighLight;
