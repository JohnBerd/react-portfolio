import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import curriculum from "../resources/curriculum";
import Skip from "./Skip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  labelContainer: {
    "& $alternativeLabel": {
      marginTop: 0,
    },
  },
  label: {
    cursor: "pointer",
  },
  step: {
    cursor: "pointer",
    "& $completed": {
      color: "lightgreen",
    },
    "& $active": {
      color: "pink",
    },
    "& $disabled": {
      color: "red",
    },
  },
  alternativeLabel: {},
  active: {}, //needed so that the &$active tag works
  completed: {},
  disabled: {},
  labelContainer: {
    "& $alternativeLabel": {
      marginTop: 0,
    },
  },
}));

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

const useColorlibStepIconStyles = makeStyles({
  root: {
    zIndex: 1,
    color: "#fff",
    cursor: "pointer",
  },
  active: {},
  completed: {},
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const dates = {};

  curriculum.map((current, i) => (dates[i + 1] = <div>{current.date}</div>));

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {dates[String(props.icon)]}
    </div>
  );
}

export default function VerticalLinearStepper({
  curriculum,
  activeStep,
  goTo,
}) {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        style={{ backgroundColor: "transparent" }}
      >
        {curriculum.map((current, index) => (
          <Step key={current.title}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={(e) => goTo(e, index + 1)}
              className={classes.label}
            >
              {current.title}
            </StepLabel>
            <StepContent>
              <Typography>{current.description}</Typography>
              <div className={classes.actionsContainer}></div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Typography>All steps completed - you&apos;re finished</Typography>
      )}
    </div>
  );
}
