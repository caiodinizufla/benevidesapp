import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Home from '@material-ui/icons/Home'
import Login from '@material-ui/icons/Person'
import Cadastro from '@material-ui/icons/PersonAdd'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: blue[500],
    borderRadius: 16,
    width: "100%",
  },
  rootbtnav: {
    backgroundColor: blue[500]
  },
  root: {
    width: '100%',
    height: 80,
    marginBottom: 10
  },
  title: {
    color: theme.palette.common.black,
    paddingRight: 60,
  },
  tabNav: {
    paddingLeft: 20
  },
  navs: {
    marginLeft: -20
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar className={classes.appBar}>
      <Toolbar>

        <Grid item xs={7} md={3}>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Benevides
          </Typography>
        </Grid>

        <Grid item xs={3} md={6} justify='center'>
          
        </Grid>

        <Grid item xs={2} md={3} justify='center'>

        </Grid>

      </Toolbar>
    </AppBar>
  </div>
  );
}