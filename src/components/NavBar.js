import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToggleMenu from './ToggleMenu';
import { Button, IconButton, ClickAwayListener, Box, InputBase, Tabs, Tab, withStyles } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import menu from "../globals/Menu"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'


const useStyles = makeStyles(theme => ({
  appBar: {
    background: '#FFF',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  iconContainer: {
    display: 'flex',
  },
  menuBar: {
  },
  signInButton: {
    margin: theme.spacing(1),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flex: 1,
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchField: {
    width: '100%',
  },
  backButton: {
    margin: theme.spacing(1),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  current: {
    color: "#fff",
  },
  button: {
  }
}));

const StyledTabs = withStyles(theme => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 60,
      width: '100%',
      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#FF8E53',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(17),
    '&:focus': {
      opacity: 1,
    },
    '&:hover': {
      color: '#FE6B8B',
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);


function BaseNavBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [value, setValue] = useState(0)
  const items = props.menu.map(item => item.title.toLowerCase())

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [])

  useEffect(() => {})

  const onScroll = e => {
    if (e.target.documentElement.scrollTop > document.getElementById('app-bar').offsetTop) {
      props.setSticky(true)
  } else {
    props.setSticky(false)
  }
    for (var i = props.menu.length - 1; i > -1; i--) {
      if (e.target.documentElement.scrollTop > document.getElementById(props.menu[i].anchor.substr(1)).offsetTop - 64) {
          setValue(i)
          return
      }
    }
  };



  return (
    <Toolbar >
      <div className={classes.sectionMobile}>
        <ToggleMenu side='left' menu={props.menu} auth={auth} />
      </div>
      <div className={classes.sectionDesktop}>
        <div className={classes.menuBar}>
          <StyledTabs
            value={value}
          >
            {props.menu.map((item, i) => (
              <StyledTab
                component={AnchorLink}
                label={item.title}
                value={i}
                href={item.anchor}
              />
            ))}
          </StyledTabs>
        </div>
      </div>
    </Toolbar>
  );
}

export default function NavBar(props) {
  const classes = useStyles()
  const [sticky, setSticky] = useState(false)
  return (
    <div id='app-bar'>
      <AppBar elevation={0} className={classes.appBar} position={!sticky ? "static" : 'fixed'}>
        <BaseNavBar {...props} setSticky={setSticky} />
      </AppBar>
      {sticky && <Box height="64px"></Box>}
    </div>
  );
}