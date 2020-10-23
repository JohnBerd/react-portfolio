import React, { useEffect, useState, useRef } from "react";
import { Stickyroll } from "@stickyroll/stickyroll";
import VerticalLinearStepper from "../VerticalLinearStepper";
import { makeStyles, Box } from "@material-ui/core";
import ParralaxTitle from "../ParallaxTitle";
import curriculum from "../../resources/curriculum";
import _ from "lodash";
import { scrollTo } from "@stickyroll/utils";
import backgroundImage from "../../assets/images/bg-transparent.svg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Wave from "react-wavify";
import WaveAnimation from "../WaveAnimation/WaveAnimation";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.bg,
    paddingTop: theme.spacing(3),
  },
  container: {
    padding: theme.spacing(3),
    width: "100%",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    height: "calc(100vh - 64px)",
    position: "relative",
  },
  imgContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  image: {
    width: "25vw",
    height: "25vw",
    maxWidth: "320px",
    maxHeight: "320px",
    justifySelf: "center",
    display: "block",
    margin: "auto",
  },
  backgroundImage: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    imgContainer: {
      flex: 0,
      marginBottom: theme.spacing(2),
    },
    flexContainer: {
      flexDirection: "column",
    },
  },
}));

export default function Curriculum() {
  const classes = useStyles();
  const ref = useRef();

  const goTo = (e, index) => {
    e.preventDefault();
    scrollTo(`cursus/${index}`, e.target, {
      noFocus: true,
      noHash: true,
      behavior: "smooth",
    });
    window.scrollBy(0, 10);
  };

  return (
    <div className={classes.root}>
      <ParralaxTitle title="Parcours" bg />
      <div ref={ref}>
        <Stickyroll pages={curriculum} anchors="cursus" factor={0.5}>
          {({ page, pageIndex, pages, progress, anchors }) => {
            return (
              <div className={classes.backgroundImage}>
                <Box height={84} />
                <div id={pageIndex} className={classes.flexContainer}>
                  <div className={classes.imgContainer}>
                    <div className={classes.image} style={{}}>
                      <img
                        className="fadeIn"
                        key={pageIndex}
                        width="100%"
                        src={curriculum[pageIndex].image}
                        alt="logos"
                      />
                    </div>
                  </div>
                  <div className={classes.imgContainer}>
                    <VerticalLinearStepper
                      activeStep={pageIndex}
                      curriculum={curriculum}
                      goTo={goTo}
                    />
                  </div>
                  <div
                    style={{ position: "absolute", left: "50%", bottom: 100 }}
                  >
                    <span class="scroll-icon">
                      <span class="scroll-icon__dot"></span>
                    </span>
                  </div>
                </div>
                <WaveAnimation />

              </div>
            );
          }}
        </Stickyroll>
      </div>

    </div>
  );
}
