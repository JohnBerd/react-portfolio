import React, { useState, useRef, createRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ParralaxTitle from "../ParallaxTitle";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import ResponsiveCarousel from "../ResponsiveCarousel";
import Section from "../Section";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slideData from "../../resources/projects";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import {
  Card,
  Paper,
  CardActionArea,
  Dialog,
  useMediaQuery,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from "@material-ui/core";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },

};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "300vh",
  },
  card: {
    margin: theme.spacing(3),
    overflow: "hidden",
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  image: {
    width: "100%",
    height: "40vw",
    objectFit: "cover",
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "6vmin",
    fontWeight: 600,
    fontFamily: "'Playfair Display', serif",
  },
  button: {
    background: theme.bg,
    border: 0,
    color: 'white',
    height: 48,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
}));

const CustomRightArrow = ({ onClick, ...rest }) => {
  const classes = useStyles()
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton onClick={() => onClick()} style={{position: "absolute", right: "calc(4% + 1px)"}} className={classes.button}>
      <ChevronRightIcon />
    </IconButton>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const classes = useStyles()
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton onClick={() => onClick()} style={{position: "absolute", left: "calc(4% + 1px)"}} className={classes.button}>
      <ChevronLeftIcon />
    </IconButton>
  );
};

const Projects = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClickOpen = (index) => {
    setSlideIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSlideIndex(0);
  };

  const nextSlide = () => {
    if (slideIndex === slideData.length - 1) {
      setSlideIndex(0)
    } else {
    setSlideIndex(slideIndex + 1)
    }
  }

  return (
    <Section title="Projets">
      <div className={classes.root}>
        <Carousel
          responsive={responsive}
          swipeable
          partialVisible
          keyBoardControl
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {slideData.map((project, index) => (
            <Paper elevation={5} className={classes.card}>
              <CardActionArea onClick={() => handleClickOpen(index)}>
                <img
                  src={project.preview}
                  alt="carousel-img"
                  className={classes.image}
                />
                <h2 className={classes.text}>{project.title}</h2>
              </CardActionArea>
            </Paper>
          ))}
        </Carousel>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="responsive-dialog-title">
          {slideData[slideIndex].title}
        </DialogTitle>
        <DialogContent>
          <ResponsiveCarousel
            useKeyboardArrows
            images={slideData[slideIndex].images}
            videos={slideData[slideIndex].videos}
          />
          <DialogContentText>
          {slideData[slideIndex].description}
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={nextSlide} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Section>
  );
};

export default Projects;
