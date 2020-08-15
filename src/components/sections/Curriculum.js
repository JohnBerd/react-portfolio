import React, { useEffect } from 'react'
import { makeStyles, Grid, Paper } from '@material-ui/core';
import Section from '../Section';
import LeaderLine from 'react-leader-line';

const useStyles = makeStyles(theme => ({
  root: {

  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));


const Curriculum = () => {
  const classes = useStyles()

  useEffect(() => {
    let line = new LeaderLine(
      document.getElementById('start'),
      document.getElementById('end'),
      { color: 'white', size: 8, dash: { animation: true }, path: "arc", hide: true }
    );
    line.setOptions({startSocket: 'right', endSocket: 'right'});
    line.show('draw', { duration: 3000, timing: 'linear' })

  })


function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    </React.Fragment>
  );
}

  return (
    <Section title="Parcours" bg >
      <div className={classes.root}>
        <div id="start" style={{ backgroundColor: '#0FF', width: 300, height: 300, margin: 200 }} />
        <div id="end" style={{ backgroundColor: '#0FF', width: 300, height: 300, margin: 200 }} />
        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
      </div>
    </Section>
  )
}

export default Curriculum