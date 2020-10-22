import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  contained: {
    background: theme.bg,
    border: 0,
    marginRight: theme.spacing(2),
    color: 'white',
    height: 48,
  },
  outlined: {
    background: 'white',
    border: 0,
    marginRight: theme.spacing(2),
    color: theme.bg,
    height: 48,
  },
}));

export default function StyledIconButton(props) {
  const classes = useStyles();
  const {contained} = props;
  return <IconButton className={contained ? classes.contained : classes.outlined} {...props}></IconButton>;
}