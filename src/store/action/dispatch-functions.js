// Note: All dispatch functions are defined here...!

import axios from "axios";
import {
  FETCH_GLOBAL_DATA
}
  from "../constant/action-types";

// Note: Function to fetch global covid data...!
const fetchGlobalData = () => {
  return async (dispatch) => {
    let api = 'https://disease.sh/v3/covid-19/all';

    try {
      let response = await axios.get(api);
      let requiredData = response.data;
      // console.log(requiredData);
      dispatch({
        type: FETCH_GLOBAL_DATA,
        payload: requiredData
      });
    }

    catch (error) {
      console.error(`${error}`);
    }
  }
}

export {
  fetchGlobalData
};