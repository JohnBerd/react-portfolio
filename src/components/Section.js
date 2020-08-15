import React from 'react'
import ParralaxTitle from './ParallaxTitle'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '300vh',
    padding: theme.spacing(3)
  },
  bg: {
    background: theme.bg
  },
  title: {
    margin: theme.spacing(7)
  }

}));

const Section = ({ children, title, bg }) => {
  const classes = useStyles()
  return (
    <div className={bg ? classes.bg : {}}>
      <div className={classes.root}>
        <ParralaxTitle title={title} bg={bg} className={classes.title} />
        {children}
      </div>
    </div>
  )
}

export default Section