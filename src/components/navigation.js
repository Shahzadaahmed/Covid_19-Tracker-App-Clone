// Note: Navbar component...!

import React from 'react';
import { Link } from 'react-router-dom';
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography
}
    from '@material-ui/core';

// Note: Handeling Material UI here...!
const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "pink",
        boxShadow: "none"
    },

    linksContainer: {
        display: "flex",
        justifyContent: "space-around"
    },

    linksText: {
        color: "black",
        textDecoration: "none",
        textAlign: "center"
    },

    middleText: {
        textDecoration: "underline",
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    }
}));

const Navbar = () => {

    // Note: To access Material UI css...!
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar className={classes.linksContainer}>
                    <Link to="/" className={classes.linksText}>
                        <Typography>
                            View global
                        </Typography>
                    </Link>

                    <Typography variant="h6" className={classes.middleText}>
                        Covid-19 Tracker App
                    </Typography>

                    <Link to="/countries-data" className={classes.linksText}>
                        <Typography>
                            View by country
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;