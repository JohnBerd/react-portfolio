import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ParralaxTitle from "../ParallaxTitle";
import { Typography, IconButton, withStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Section from "../Section";
import curve from "../../assets/images/curve-inverted.svg"

const WhiteTextTypography = withStyles((theme) => ({
  root: {
    color: "#FFFFFF",
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  white: {
    color: "#fff",
  },
  socialContainer: {
    display: "flex",
  },
  footer: {
    display: "flex",
    color: "#fff",
    padding: theme.spacing(2),
    justifyContent: "center",
    backgroundColor: "#003441",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundImage: `url(${curve})`,
          backgroundSize: "110vw",
          backgroundPositionX: "center",
          paddingBottom: "2.7vw",
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
      </div>
      <Section bg>
        <div className={classes.root}>
          <WhiteTextTypography variant="h3" className={classes.color}>
            Envie de collaborer?
          </WhiteTextTypography>
          <WhiteTextTypography variant="body1">
            N'hesitez pas à me contacter sur LinkedIn ou visiter mon GitHub pour
            voir quelques uns de mes anciens projets.
          </WhiteTextTypography>
          <div className={classes.socialContainer}>
            <a href="https://www.linkedin.com/in/xlecunff/" target="_blank" rel="noopener noreferrer">
              <div className="box">
                <i
                  className={`fab fa-linkedin fa-5x fa-gradient`}
                  style={{
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                ></i>
              </div>
            </a>
            <a href="https://github.com/JohnBerd" target="_blank" rel="noopener noreferrer" style={{color: "transparent"}}>
              <div className="box">
                <i
                  className={`fab fa-github fa-5x fa-gradient`}
                  style={{
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                ></i>
              </div>
            </a>
          </div>
        </div>
      </Section>
      <div className={classes.footer}>
        <span>Made with&nbsp;</span>{" "}
        <span role="img" aria-label="heart">
          &#10084;&#65039;
        </span>{" "}
        <span>&nbsp;in React.Js by Xavier Le Cunff</span>
      </div>
    </div>
  );
};

export default Contact;
