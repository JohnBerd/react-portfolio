import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    marginBottom: theme.spacing(3),
  },
}));

const YoutubeSlide = ({ url, isSelected }) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={url}
      playing={isSelected}
      className="react-player"
      width="100%"
      height="100%"
    />
  </div>
);

const customRenderItem = (item, props) => (
  <item.type style={{ background: "white" }} {...item.props} {...props} />
);

const getContent = ({ images, videos }) => {
  const im = images
    ? images.map((image, key) => (
        <div className="player-wrapper">
          <img
            src={image}
            alt="carousel-img"
            className="react-player"
            style={{ height: "100%", objectFit: "contain" }}
          />
        </div>
      ))
    : [];
  const vi = videos
    ? videos.map((video, key) => (
        <YoutubeSlide key={`youtube-${key}`} url={video} />
      ))
    : [];
  return [...im, ...vi];
};

const ResponsiveCarousel = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.carouselWrapper}>
      <Carousel
        swipeable
        emulateTouch
        dynamicHeight
        showThumbs={false}
        showStatus={false}
        renderItem={customRenderItem}
      >
        {getContent(props)}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
