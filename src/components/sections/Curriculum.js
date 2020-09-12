import React from 'react'
import { Stickyroll } from '@stickyroll/stickyroll';
import VerticalLinearStepper from '../VerticalLinearStepper'
import { makeStyles, Box } from '@material-ui/core';
import quarantedeux from '../../assets/images/42.png'
import villetaneuse from '../../assets/images/p13.png'
import epitech from '../../assets/images/epitech.png'
import ImageFadeIn from "react-image-fade-in";
import ParralaxTitle from '../ParallaxTitle';
import WaveAnimation from '../WaveAnimation/WaveAnimation';
import curriculum from '../../resources/curriculum'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.bg,
    paddingTop: theme.spacing(3)
  },
  container: {
    padding: theme.spacing(3),
    width: '100%'
  },
  imgContainer: {
    flex: 1,
    padding: theme.spacing(3),
    alignSelf: 'center'
  },
  img: {
    width: '100%'
  }
}));


export default function Curriculum(props) {
  const classes = useStyles()
  return (

    <div className={classes.root}>
    <ParralaxTitle title="Parcours" bg  />
      <Stickyroll pages={curriculum}>
        {({ page, pageIndex, pages, progress }) => {
          return (
            <div>
              <Box height={84} />
              <div style={{display: "flex", flexWrap: "wrap", height: "100vh", alignItems: "flex-start", alignContent: "flex-start", alignSelf: 'center'}} >
                <div style={{alignSelf: 'center', display: 'flex', flexWrap: "wrap", alignSelf: 'center', height: "80%", flex: 1}}>
                  <div className={classes.imgContainer} >
                    <ImageFadeIn key={pageIndex} width={320} style={{ flex: 1, minWidth: 320 }} src={curriculum[pageIndex].image} alt="hiking" />
                  </div>
                  <div className={classes.imgContainer}>
                    <VerticalLinearStepper activeStep={pageIndex} curriculum={curriculum} />
                  </div>
                </div>
              </div>

            <WaveAnimation />
            </div>
          );
        }}
      </Stickyroll>
    </div>

  )
}