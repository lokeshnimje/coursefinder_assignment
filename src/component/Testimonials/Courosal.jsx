
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './testimonialsStyle.css'


export const HomeCourosal = ({ data }) => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 990 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 990, min: 660 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 660, min: 420 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 420, min: 0 },
        items: 1,
      },
    };
    return (
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={true}
        autoPlaySpeed={5000}
        showDots={true}
      >
        {data?.map((el,i) => {
          return (
            <div class="" style={{ width:'75%', margin:'auto'}}>
              {el}
              <br />
            </div>
          )
        })}
      </Carousel>
    );
  }