import React, { useContext, useEffect } from "react";
import FilterValue from "../mockdata/FilterValue";
import LauncherContext from "../context/launcherContext";
const FilterComponent = (props) => {
  const launcherContext = useContext(LauncherContext);
  const {
    launch_year,
    land_success,
    launch_success,
    getMissions,
  } = launcherContext;
  const OnChangeButton = (e) => {
    let flag = false;
    if (
      launcherContext[e.target.name] === e.target.innerText.toLowerCase() &&
      flag === false
    ) {
      launcherContext.setFilter({
        [e.target.name]: undefined,
      });
      flag = !flag;
      return;
    }
    launcherContext.setFilter({
      [e.target.name]: e.target.innerText.toLowerCase(),
    });
  };
  useEffect(() => {
    let data = {};
    if (launch_year) {
      data.launch_year = launch_year;
    }
    if (land_success) {
      data.land_success = land_success;
    }
    if (launch_success) {
      data.launch_success = launch_success;
    }
    getMissions(data);
    //eslint-disable-next-line
  }, [launch_year, land_success, launch_success]);
  const years = FilterValue.LaunchYear.map((e) => {
    return (
      <button
        key={e}
        data-isselected={launch_year === e.toString() ? true : false}
        name="launch_year"
        onClick={OnChangeButton}
      >
        {e}
      </button>
    );
  });
  const launch = FilterValue.Bool.map((e) => {
    return (
      <button
        key={e}
        data-isselected={
          launch_success && launch_success.toString() === e.toLowerCase()
            ? true
            : false
        }
        name="launch_success"
        onClick={OnChangeButton}
      >
        {e}
      </button>
    );
  });
  const landing = FilterValue.Bool.map((e) => {
    return (
      <button
        key={e}
        data-isselected={
          land_success && land_success.toString() === e.toLowerCase()
            ? true
            : false
        }
        name="land_success"
        onClick={OnChangeButton}
      >
        {e}
      </button>
    );
  });
  return (
    <div className="flex-filter bgwhite">
      <h3>Filters</h3>
      <div className="clscenter-filter">
        <span className="text-filter">Launch Year</span>
        <div className="years commondiv">{years}</div>
        <span className="text-filter">Successful Launch</span>
        <div className="launch commondiv">{launch}</div>
        <span className="text-filter">Successful Landing</span>
        <div className="landing commondiv">{landing}</div>
      </div>
    </div>
  );
};

export default FilterComponent;
