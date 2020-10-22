import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  contained: {
    background: theme.bg,
    border: 0,
    marginRight: theme.spacing(2),
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  outlined: {
    background: 'white',
    border: 0,
    marginRight: theme.spacing(2),
    borderRadius: 3,
    color: theme.bg,
    height: 48,
    padding: '0 30px',
  },
}));

export default function StyledButton(props) {
  const classes = useStyles();
  const {contained} = props;
  return <Button className={contained ? classes.contained : classes.outlined} {...props}></Button>;
}