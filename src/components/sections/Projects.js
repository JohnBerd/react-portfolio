import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ParralaxTitle from '../ParallaxTitle';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import Section from '../Section';



const useStyles = makeStyles(theme => ({
  root: {
    height: '300vh',
  },

}));

const Projects = () => {
  const classes = useStyles()

  return (
    <Section title="Projets" >
      <div className={classes.root} >
      <ProjectCarousel />
      </div>
    </Section>
  )
}

export default Projects