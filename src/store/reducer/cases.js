// Note: All cases are defined here...!

import {
  FETCH_GLOBAL_DATA
}
  from "../constant/action-types";

let INIT_STATE = {
  globalData: null
};

const apiDataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case FETCH_GLOBAL_DATA:
      return {
        ...state,
        globalData: action.payload
      }

    default:
      return state;
  }
};

export default apiDataReducer;