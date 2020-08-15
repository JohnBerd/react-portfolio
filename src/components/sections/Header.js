import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import glasses from '../../assets/images/glasses.png'
import { Parallax } from 'react-scroll-parallax';
import Image from '../Image'
import './Header.css'
import Typical from 'react-typical'


const useStyles = makeStyles(theme => ({
  root: {
    background: theme.bg,
    zIndex: 3,
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center'
  },
  glasses: {
    position: 'relative',
    top: -250,
    left: -100,
  },
  titleContainer: {
    flex: 1,
    height: 300,    
    backgroundColor: 'transparent',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 400,
  },
  title: {
    alignSelf: 'center',
    width: 400,
    fontSize: 24,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#FFF'
  },
  shapeContainer: {
    height: 700,
    width: 400,
    overflow: 'hidden'
  }
}));

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} id="main" >
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <Typical
            steps={[
              'Je Suis Xavier Le Cunff 👋', 2000,
              'Je Suis UX Designer.', 1500,
              'Je Suis Developpeur D\'Applications Mobiles.', 1500,
              'Je Suis Developpeur D\'Applications Web.', 1500,
          ]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
      <div className={classes.shapeContainer}>
        <div class="shape">
          <Parallax y={[-20, 20]} tagOuter="figure">
            <Image src={glasses} className={classes.glasses} />
          </Parallax>
        </div>
      </div>
    </div>
  )
}

export default Header