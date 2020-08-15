import React from 'react'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F00',
    height: '300vh',
  },

}));

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
    
    </div>
  )
}

export default Footer