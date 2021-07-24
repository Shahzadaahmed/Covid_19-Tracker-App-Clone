// Note: CountriesData component...!

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  makeStyles,
  Grid,
  Paper,
  Select,
  MenuItem
}
  from '@material-ui/core';
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
  },

  dropDown: {
    [theme.breakpoints.up('md')]: {
      width: '20%'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto'
    },
  }
}));

const CountriesData = () => {

  // Note: To access Material UI css here...!
  const classes = useStyles();

  // Note: Handeling states here...!
  const [countriesList, setCountriesList] = useState([]);
  const [country, setCountry] = useState("");

  // Note: onChnage dropdown handler...!
  const handleDropDown = (event) => {
    // console.log(event.target.value);
    setCountry(event.target.value);
  }

  // Note: Function to fetch countries data from API...!
  const getCountryData = async () => {
    let api = 'https://disease.sh/v3/covid-19/countries';

    try {
      let response = await axios.get(api);
      let requiredData = response.data;
      setCountriesList(requiredData);
      // console.log(requiredData);
    }

    catch (error) {
      console.error(`${error}`);
    }
  }

  // Note: When this component rendered successfully then this hook will run...!
  useEffect(() => {
    getCountryData();
  }, []);

  // Note: Function to show data...!
  const showCovidData = () => {
    let countriesClone = countriesList;
    let selectedCountry = country;
    console.log(countriesClone[selectedCountry]);
  }

  // Note: This hook will run only on when country state will change...!
  useEffect(() => {
    showCovidData();
  }, [country]);

  return (
    <React.Fragment>
      <div className={classes.container}>

        {
          (countriesList && countriesList.length > 0)
            ?
            (
              <>
                <h1 className={classes.mainHeading}> {(country === "") ? ('Please Select a country!') : (`Track COVID-19 in ${countriesList[country].country}.`)} </h1>

                <Select
                  value={country}
                  onChange={handleDropDown}
                  displayEmpty
                  className={classes.dropDown}
                >
                  <MenuItem value="" disabled> Select Country </MenuItem>
                  {
                    countriesList.map((item, index) => {
                      return (
                        <MenuItem key={index} value={index} > {item.country} </MenuItem>
                      );
                    })
                  }
                </Select>

                <Grid item className={classes.paperContainer}>
                  <Paper className={classes.paper}>
                    <h2 className={classes.header}> Coronavirus Cases: </h2>
                    <h2 style={{ color: "black", fontFamily: "sans-serif" }}> {(country === "") ? (null) : (countriesList[country].cases)} </h2>
                  </Paper>
                </Grid>

                <Grid item className={classes.paperContainer}>
                  <Paper className={classes.paper}>
                    <h2 className={classes.header}> Deaths: </h2>
                    <h2 style={{ color: "red", fontFamily: "sans-serif" }}> {(country === "") ? (null) : (countriesList[country].deaths)} </h2>
                  </Paper>
                </Grid>

                <Grid item className={classes.paperContainer}>
                  <Paper className={classes.paper}>
                    <h2 className={classes.header}> Recovered: </h2>
                    <h2 style={{ color: "green", fontFamily: "sans-serif" }}> {(country === "") ? (null) : (countriesList[country].recovered)} </h2>
                  </Paper>
                </Grid>

                <Grid item className={classes.paperContainer}>
                  <Paper className={classes.paper}>
                    <h2 className={classes.header} style={{ fontFamily: "serif" }}>
                      {
                        (country === "")
                          ?
                          ('You selected no country!')
                          :
                          (`${countriesList[country].country} added ${countriesList[country].todayCases} confirmed cases, ${countriesList[country].todayDeaths} deaths and ${countriesList[country].todayRecovered} recovered cases in the last 24 hours.`)
                      }
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

export default CountriesData;