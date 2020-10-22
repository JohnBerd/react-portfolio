import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as UILink } from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
    fontWeight: 'bold',
  },
  listtext: {
    color: '#FFF',
    textTransform: "uppercase",
    fontWeight: 'bold',
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    background: theme.bg
  },
  listitem: {
    height: 70,
  }
}));

export default function ToggleMenu(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav">
        {props.menu.map((item) => (
          <UILink  style={{textDecoration: 'none'}}>
          <ListItem button component={AnchorLink} href={item.anchor} className={classes.listitem}>
            <ListItemText primary={item.title} className={classes.listtext} primaryTypographyProps={{ style: {color: "#FFF"} }}/>
          </ListItem>
          </UILink>
        ))}
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {props.menu.map((item) => (
          <UILink  style={{textDecoration: 'none'}}>
          <ListItem button component={AnchorLink} href={item.anchor}>
            <ListItemText primary={item.title} />
          </ListItem>
          </UILink>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(props.side, true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)} classes={{ paper: classes.paper }}>
        {sideList('left')}
      </Drawer>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)} classes={{ paper: classes.paper }}>
        {fullList('top')}
      </Drawer>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)} classes={{ paper: classes.paper }}>
        {fullList('bottom')}
      </Drawer>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} classes={{ paper: classes.paper }}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}