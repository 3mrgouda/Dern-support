import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/banner/1.jpg";
import img2 from "../assets/banner/2.jpeg";
import img3 from "../assets/banner/3.jpg";
import img4 from "../assets/banner/4.webp";
import img5 from "../assets/banner/5.jpg";
import img7 from "../assets/banner/7.jpeg";

function Hero() {
  const img = [img1, img2, img3, img4, img5, img7];
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container container mx-auto mt-20 ">
      <Slider {...settings}>
        {img.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              className="w-full max-w-[600px] aspect-square object-cover mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
