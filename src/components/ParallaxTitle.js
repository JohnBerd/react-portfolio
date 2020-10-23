import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "space-around",
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    fontFamily: 'monospace',
    color: '#444',
    display: "inline-block",
    textTransform: "uppercase",
    fontWeight: 700,
    fontStyle: "italic",
  },
  copy: {
    margin: "0.2em 0",
    textAlign: "center",
  },
  letterBg: {
    fontFamily: 'monospace',
    color: '#FFF',
    display: "inline-block",
    textTransform: "uppercase",
    fontWeight: 700,
    fontStyle: "italic",
  },
  barTop: {
    marginLeft: "0.8em",
    width: "10em",
    height: "1em",
    borderTop: "5px solid",
    borderBottom: "5px solid",
    borderImageSource: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderImageSlice: 1,
    transform: "skew(-10deg)",
  },
  barTopBg: {
    marginLeft: "0.8em",
    width: "10em",
    height: "1em",
    borderTop: "5px solid",
    borderBottom: "5px solid",
    borderImageSource: "linear-gradient(45deg, #FFF 30%, #FFF 90%)",
    borderImageSlice: 1,
    transform: "skew(-10deg)",
  },

}));

export default function ParralaxTitle({ title, bg, ...props }) {
  const classes = useStyles()
  const copy = title.split('');


  return (
    <div {...props}>
      <div className={classes.root}>
        <div className={bg ? classes.barTopBg : classes.barTop} />
        <Typography variant="h3" component="h3" className={classes.copy}>
          {copy.map((letter, i) => (
            <Parallax
              key={`copy-${i}`}
              x={[0, 100 * (i - (title.length / 2))]}
              className={bg ? classes.letterBg : classes.letter}
            >
              {letter}
            </Parallax>
          ))}
        </Typography>
        <div className={bg ? classes.barTopBg : classes.barTop} />
      </div>
    </div>
  );
}