import React, { useEffect, useState, useRef } from "react";
import { Stickyroll } from "@stickyroll/stickyroll";
import VerticalLinearStepper from "../VerticalLinearStepper";
import { makeStyles, Box } from "@material-ui/core";
import ImageFadeIn from "react-image-fade-in";
import ParralaxTitle from "../ParallaxTitle";
import WaveAnimation from "../WaveAnimation/WaveAnimation";
import curriculum from "../../resources/curriculum";
import _ from "lodash";
import Skip from "../Skip";
import { assert, scrollTo } from "@stickyroll/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.bg,
    paddingTop: theme.spacing(3),
  },
  container: {
    padding: theme.spacing(3),
    width: "100%",
  },
  imgContainer: {
    flex: 1,
    padding: theme.spacing(3),
    alignSelf: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
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
        <Stickyroll pages={curriculum} anchors="cursus" factor={.5}>
          {({ page, pageIndex, pages, progress, anchors }) => {
            return (
              <div>
                <Box height={84} />
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    height: "100vh",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    alignSelf: "center",
                  }}
                >
                  <div
                    id={pageIndex}
                    style={{
                      alignSelf: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      alignSelf: "center",
                      height: "80%",
                      flex: 1,
                    }}
                  >
                    <div className={classes.imgContainer}>
                      <ImageFadeIn
                        key={pageIndex}
                        width={320}
                        style={{ flex: 1, minWidth: 320, justifySelf: "center", display: "block", margin: "auto" }}
                        src={curriculum[pageIndex].image}
                        alt="logos"
                      />
                    </div>
                    <div className={classes.imgContainer}>
                      <VerticalLinearStepper
                        activeStep={pageIndex}
                        curriculum={curriculum}
                        goTo={goTo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Stickyroll>
      </div>
    </div>
  );
}
