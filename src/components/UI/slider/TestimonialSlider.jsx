

import React from 'react'
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <Slider {...settings}>
          <div>
            <p className="review__text">
              "Ashley was such an awesome server and the bone in wings plus the 
              combination pizza with a. Little extra red peppers and boom best 
              meal you ever had"
            </p>
            <div className=" slider__content d-flex align-items-center gap-3 ">
              <img src={ava01} alt="avatar" className=" rounded" />
              <h6>Jhon Doe</h6>
            </div>
          </div>
          <div>
            <p className="review__text">
              " I love the building, very unique. Service was good although can tell they are short handed. 
              Food was good too. I would return."
            </p>
            <div className="slider__content d-flex align-items-center gap-3 ">
              <img src={ava02} alt="avatar" className=" rounded" />
              <h6>Mitchell Marsh</h6>
            </div>
          </div>
          <div>
            <p className="review__text">
              "We ordered online. Online said our pizza was ready, but it was not when we got there. However, 
              it did come out fairly quick and was hot and good. I asked for mine well done, and it did not 
              come well done, but it was still pretty good. This is not our go to pizzaplace, 
              but it is nice for a change every once in awhile."
            </p>
            <div className="slider__content d-flex align-items-center gap-3 ">
              <img src={ava03} alt="avatar" className=" rounded" />
              <h6>Steven Crock</h6>
            </div>
          </div>
        </Slider>
      );
}

export default TestimonialSlider