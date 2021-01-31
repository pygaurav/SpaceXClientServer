import React, { Fragment } from "react";
import Loader from "../img/Loader.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img src={Loader} alt="Loading..." className="spinner" />
    </Fragment>
  );
};

export default Spinner;
