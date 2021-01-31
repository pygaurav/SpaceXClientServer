import React, { Fragment } from 'react';
import imagePath from '../utils/ImagePath';
const Spinner = () => {
  return (
    <Fragment>
      <img src={imagePath('Loader.gif')} alt="Loading..." className="spinner" />
    </Fragment>
  );
};

export default Spinner;
