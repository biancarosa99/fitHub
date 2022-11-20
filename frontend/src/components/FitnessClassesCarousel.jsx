import React from "react";
import "../styles/FitnessClassesCarousel.css";
import { fitnessClasses } from "../assets/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const FitnessClassesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-cnt">
      <Slider {...settings}>
        {fitnessClasses.map((fitnessClass) => (
          <div key={fitnessClass.id} className="card">
            <div className="card-container">
              <div className="image-cnt">
                <img src={fitnessClass.img} alt={fitnessClass.title} />
              </div>
              <div className="card-bottom">
                <div className="class-description">
                  <h1>
                    {fitnessClass.title} - {fitnessClass.duration} min
                  </h1>
                  <div>{fitnessClass.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FitnessClassesCarousel;
