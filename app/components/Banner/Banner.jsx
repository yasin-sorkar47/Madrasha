"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BannerItem from "./BannerItem";

export default function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section>
      <Slider {...settings}>
        <BannerItem />
        <BannerItem />
        <BannerItem />
      </Slider>
    </section>
  );
}
