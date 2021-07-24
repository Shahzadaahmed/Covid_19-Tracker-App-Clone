// Main AppRoutes component...!

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from "react-router-dom";

// Note: Importing reuseabale components...!
import Navbar from "./components/navigation";
import GlobalData from "./components/global-data";
import CountriesData from "./components/countries-data";

const AppRoutes = () => {
    return (
        <React.Fragment>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<GlobalData />} />
                    <Route path="countries-data" element={<CountriesData />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default AppRoutes;