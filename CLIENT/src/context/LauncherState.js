import React, { useReducer } from "react";
import LauncherContext from "./launcherContext";
import launcherReducer from "./launcherReducer";
import axios from "axios";
import UrlBuilder from "../utils/UrlBuilder";
import { useHistory } from "react-router-dom";
import { GET_MISSIONS, SET_FILTER, SET_LOADING } from "./types/LauncherTypes";
const LauncherState = (props) => {
  const history = useHistory();
  const initialState = {
    loading: true,
    missions: [],
    launch_year: 0,
    land_success: false,
    launch_success: false,
  };

  const [state, dispatch] = useReducer(launcherReducer, initialState);

  //Get Missions Data
  const getMissions = async (data) => {
    setLoading();
    var serverUrl = "https://api.spacexdata.com/v3/launches?limit=100";
    const url = UrlBuilder(serverUrl, data);
    if (data) {
      const browserUrl = UrlBuilder("", data);
      history.push(`${browserUrl}`);
    }
    let payload = await axios.get(url);
    return dispatch({
      type: GET_MISSIONS,
      payload: payload.data,
    });
  };

  //Set Filter Data
  const setFilter = (data) => {
    return dispatch({
      type: SET_FILTER,
      payload: data,
    });
  };

  const setLoading = () => {
    return dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <LauncherContext.Provider
      value={{
        loading: state.loading,
        missions: state.missions,
        launch_year: state.launch_year,
        land_success: state.land_success,
        launch_success: state.launch_success,
        getMissions,
        setFilter,
      }}
    >
      {props.children}
    </LauncherContext.Provider>
  );
};

export default LauncherState;
