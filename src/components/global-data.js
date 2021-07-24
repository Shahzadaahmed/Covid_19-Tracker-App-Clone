// Note: GlobalData component...!

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeStyles,
  Grid,
  Paper
}
  from '@material-ui/core';
import { fetchGlobalData } from "../store/action/dispatch-functions";
import { Ripple } from "react-spinners-css";

// Note: Handeling Material UI styling here...!
const useStyles = makeStyles((theme) => ({

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: '90vh',
    // [theme.breakpoints.up('md')]: {
    //   height: '90vh'
    // },
    // [theme.breakpoints.down('sm')]: {
    //   height: 'auto'
    // },
    // [theme.breakpoints.down('xs')]: {
    //   height: 'auto'
    // },
  },

  paperContainer: {
    [theme.breakpoints.up('md')]: {
      width: '60%'
    },
    [theme.breakpoints.down('md')]: {
      width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      marginRight: theme.spacing(2.5),
      marginLeft: theme.spacing(2.5)
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      marginRight: theme.spacing(2.5),
      marginLeft: theme.spacing(2.5)
    },
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "pink",
    marginTop: '1em'
  },

  mainHeading: {
    color: "black",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginBottom: "0.5em",
    fontSize: 28
  },

  header: {
    color: "#555555",
    fontFamily: "sans-serif",
    textAlign: "center"
  }
}));

const GlobalData = () => {

  // Note: To access Material UI css here...!
  const classes = useStyles();

  // Note: Hnadeling redux here...!
  const dispatch = useDispatch();

  // Note: When this component rendered successfully then this hook will run and hit the API...!
  useEffect(() => {
    dispatch(fetchGlobalData());
  }, []);

  // Note: Fetching global data from redux...!
  const fetchGData = useSelector(({ state }) => { return state.globalData });
  console.log(fetchGData);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <h1 className={classes.mainHeading}> COVID-19 Global Update! </h1>

        {
          (fetchGData != null)
            ?
            (
              <>
                <Grid item className={classes.paperContainer}>
                  <Paper className={classes.paper}>
                    <h2 className={classes.header}> Coronavirus Cases: </h2>
                    <h2 style={{ color: "black", fontFamily: "sans-serif" }}> {fetchGData.cases} </h2>
                  </Paper>
                </Grid>

                <Grid item className={classes.paperContainer}>
                  <Paper className={classes.paper}>
                    <h2 className={classes.header}> Deaths: </h2>
                    <h2 style={{ color: "red", fontFamily: "sans-serif" }}> {fetchGData.deaths} </h2>
                  </Paper>
                </Grid>

                <Grid item className={classes.paperContainer}>
                  <Paper className={classes.paper}>
                    <h2 className={classes.header}> Recovered: </h2>
                    <h2 style={{ color: "green", fontFamily: "sans-serif" }}> {fetchGData.recovered} </h2>
                  </Paper>
                </Grid>

                <Grid item className={classes.paperContainer}>
                  <Paper className={classes.paper}>
                    <h2 className={classes.header} style={{ fontFamily: "serif" }}>
                      {`There are ${fetchGData.todayCases} confirmed cases, ${fetchGData.todayDeaths} deaths and ${fetchGData.todayRecovered} recovered cases added in the last 24 hours.`}
                    </h2>
                  </Paper>
                </Grid>
              </>
            )
            :
            (<Ripple color="black" />)
        }
      </div>
    </React.Fragment>
  );
}

export default GlobalData;