import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import logo1 from "../../assets/appLogos/jainTirth.webp";
import logo2 from "../../assets/appLogos/ED.webp";
import logo3 from "../../assets/appLogos/ES.webp";
import logo4 from "../../assets/appLogos/ET.webp";
import logo5 from "../../assets/appLogos/yuva.webp";
import logo6 from "../../assets/appLogos/EasyPagar.webp";
import logo7 from "../../assets/appLogos/JK.webp";
import logo8 from "../../assets/appLogos/kalpavriksha.webp";
import logo9 from "../../assets/appLogos/growth.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoreApps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfSlide, setNumberOfSlide] = useState(
    window.screen.width < 720 ? (window.screen.width < 480 ? 1 : 3) : 5
  );

  const handleResize = () => {
    setNumberOfSlide(window.screen.width < 720 ? (window.screen.width < 480 ? 1 : 3) : 5);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: numberOfSlide,
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const logoArray = [
    { img: logo1, url: "https://jaintirth.info" },
    { img: logo2, url: "https://play.google.com/store/apps/details?id=com.yuva.easy_diagnostic" },
    { img: logo3, url: "https://easystock.live" },
    { img: logo4, url: "https://easytracker.co.in" },
    { img: logo5, url: "https://play.google.com/store/apps/details?id=com.yuva.incentive_utility" },
    { img: logo6, url: "https://wbtechindia.com/#/pagar" },
    { img: logo7, url: "https://wbtechindia.com/#/jk" },
    { img: logo8, url: "https://wbtechindia.com/#/kalpa" },
    { img: logo9, url: "https://wbtechindia.com/#/growth" },
  ];

  const getClass = (index) => {
    return index === currentIndex ? "app_logo app_logo_center" : "app_logo";
  };

  return (
    <div
      className="w-full bg-shape text-main-color flex items-center flex-col scroll-mt-[100px] rounded-xl gap-10 px-10"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-xl font-bold text-customPurple text-center py-10">
          More Apps by MWB Technologies
        </h2>
      </div>
      <Slider ref={sliderRef} {...settings} className="w-full">
        {logoArray.map((imgObj, index) => (
          <div key={index} className="">
            <div className="flex flex-col items-center justify-center mb-10">
              <a
                className="w-40 h-40 max-md:w-20 max-md:h-20 outline-none p-4 max-md:p-1 snap-center flex flex-col items-center justify-center"
                href={imgObj.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                 src={imgObj.img}
                 alt="mwb Products"
                 loading="lazy"
                 className={`w-40 max-md:w-20 aspect-square cursor-pointer transition-all ease-in-out duration-[.3s] ${getClass(index)}`}
/>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default MoreApps;
