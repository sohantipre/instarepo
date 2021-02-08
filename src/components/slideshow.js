// import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Slideshow = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={160}
      naturalSlideHeight={450}
      totalSlides={4}
      interval={3000}
      isPlaying={true}
      orientation='vertical'
    >
      <Slider>
        <Slide index={0}>
          <img
            style={{
              paddingLeft: "145px",
              paddingTop: "90px",
              width: "250px",
              height: "450px",
            }}
            src='https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg'
          ></img>
        </Slide>
        <Slide index={1}>
          <img
            style={{
              paddingLeft: "145px",
              paddingTop: "90px",
              width: "250px",
              height: "450px",
            }}
            src='https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg'
          ></img>
        </Slide>
        <Slide index={3}>
          <img
            style={{
              paddingLeft: "145px",
              paddingTop: "90px",
              width: "250px",
              height: "450px",
            }}
            src='https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg'
          ></img>
        </Slide>
        <Slide index={4}>
          <img
            style={{
              paddingLeft: "145px",
              paddingTop: "90px",
              width: "250px",
              height: "450px",
            }}
            src='https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg'
          ></img>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Slideshow;
