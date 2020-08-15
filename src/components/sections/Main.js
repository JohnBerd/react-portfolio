import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ParralaxTitle from '../ParallaxTitle';



const useStyles = makeStyles(theme => ({
  root: {
    height: '300vh',
  },

}));

const Main = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
    <ParralaxTitle title="Compétences" />

    </div>
  )
}

export default Main