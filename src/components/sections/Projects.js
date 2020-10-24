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
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import {
  Card,
  Paper,
  CardActionArea,
  Dialog,
  useMediaQuery,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import StyledButton from "../StyledButton";
import StyledIconButton from "../StyledIconButton";


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
    minHeight: "100vh",
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
    filter: "brightness(50%)"
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
  },
  linkWrapper: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const CustomRightArrow = ({ onClick, ...rest }) => {
  const classes = useStyles()
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton onClick={() => onClick()} style={{position: "absolute", right: 0}} className={classes.button}>
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
    <IconButton onClick={() => onClick()} style={{position: "absolute", left: 0}} className={classes.button}>
      <ChevronLeftIcon />
    </IconButton>
  );
};

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

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

  const previousSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(slideData.length - 1)
    } else {
    setSlideIndex(slideIndex - 1)
    }
  }

  const getCurrent = (obj) => slideData[slideIndex][obj]

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
        <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
          {slideData[slideIndex].title}
        </DialogTitle>
        <DialogContent>
          <ResponsiveCarousel
          key={slideIndex}
            useKeyboardArrows
            images={slideData[slideIndex].images}
            videos={slideData[slideIndex].videos}
          />
          <div className={classes.linkWrapper}>
            {getCurrent("android") && <StyledIconButton contained href={getCurrent("android")} target="_blank" >
              <AndroidIcon />
            </StyledIconButton>}
            {getCurrent("ios") && <StyledIconButton contained href={getCurrent("ios")} target="_blank" >
              <AppleIcon />
            </StyledIconButton>}
            {getCurrent("website") && <StyledIconButton contained href={getCurrent("website")}  target="_blank" >
              <WebAssetIcon />
            </StyledIconButton>}
          </div>
          <DialogContentText>
          {slideData[slideIndex].description}
        </DialogContentText>
        </DialogContent>
        <DialogActions>
         <StyledButton onClick={previousSlide}>
            <ChevronLeftIcon />
         </StyledButton>
          <StyledButton onClick={nextSlide} autoFocus contained>
            Projet Suivant <ChevronRightIcon />
         </StyledButton>
        </DialogActions>
      </Dialog>
    </Section>
  );
};

export default Projects;
