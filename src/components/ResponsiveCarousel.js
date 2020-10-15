import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";

const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer width="100%" url={url} playing={isSelected} className='react-player' />
);

const customRenderItem = (item, props) => <item.type {...item.props} {...props} />

const getContent = ({ images, videos }) => {
  const im = images ? images.map((image, key) => (
    <div>
      <img src={image} alt="carousel-img" />
    </div>
  )) : [];
  const vi = videos ? videos.map((video, key) => (
    <YoutubeSlide key={`youtube-${key}`} url={video} />
  )) : [];
  return [...im, ...vi]
};

const ResponsiveCarousel = (props) => {
  return (
    <Carousel swipeable emulateTouch dynamicHeight showThumbs={false}  renderItem={customRenderItem}>
      {getContent(props)}
    </Carousel>
  );
};

export default ResponsiveCarousel;
