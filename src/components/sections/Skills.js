import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Section from "../Section";
import ProgressBar from "progressbar.js";
import TrackVisibility from "react-on-screen";
import { Typography } from "@material-ui/core";
import _uniqueId from "lodash/uniqueId";
import "../../index.css";
import CubeAnimation from "../CubeAnimation/CubeAnimation";
import skills from "../../resources/skills";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(9),
  },
  progressContainer: {
    width: 150,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(7),
    marginLeft: theme.spacing(7),
    marginBottom: theme.spacing(5),
  },
  progressBar: {
    position: "absolute",
  },
  skillContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  skillTitle: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  section: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Fluo",
  },
  hidden: {
    visiblility: "hidden",
    opacity: 0,
  },
  visible: {
    visiblility: "visible",
    animation: "1s fadeIn",
  },
}));

const ProgressWrapper = (props) => {
  const classes = useStyles();

  return (
    <TrackVisibility offset={300}>
      <Typography variant="body2" className={classes.skillTitle}>
        {props.title}
      </Typography>
      <MyProgressBar {...props} />
    </TrackVisibility>
  );
};

const MyProgressBar = ({ isVisible, icon, percent }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [bar, setBar] = useState(null);
  const [id] = useState(_uniqueId("prefix-"));

  useEffect(() => {
    if (bar && !isVisible) {
      bar.destroy();
      setBar(null);
    }
    if (!isVisible || bar) return;
    if (bar) {
      bar.animate(percent || 1.0); // Number from 0.0 to 1.0
      return;
    }
    let temp_bar = new ProgressBar.Circle(`#${id}`, {
      color: theme.start,
      trailColor: "#eee",
      trailWidth: 6,
      duration: 1800,
      easing: "easeInOut",
      strokeWidth: 6,
      from: { color: theme.start, a: 0 },
      to: { color: theme.end, a: 1 },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);
      },
    });
    temp_bar.animate(percent || 1.0); // Number from 0.0 to 1.0
    setBar(temp_bar);
  });

  return (
    <div className={isVisible ? "fadeInLong" : "hidden"} key={isVisible}>
      <div id={id} key={1} className={classes.progressContainer}>
        <div className={classes.progressBar}>
          <i
            className={`fab ${icon} fa-5x fa-gradient`}
            style={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = ({ skill }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">{skill.title}</Typography>
      <Typography variant="body1">{skill.description}</Typography>
      <div className={classes.skillContainer}>
        {skill.skills.map((skill) => (
          <ProgressWrapper
            icon={skill.icon}
            percent={skill.percent}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section title="Compétences">
        {skills.map((skill) => (
          <SkillsSection skill={skill} />
        ))}
        <CubeAnimation />
      </Section>
    </div>
  );
};

export default Skills;
