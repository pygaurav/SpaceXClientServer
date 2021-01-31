import FilterComponent from '../components/FilterComponent';
import MissionListComponent from '../components/MissionListComponent';
import HeaderComponent from '../components/shared/HeaderComponent';
import CreatedByComponent from '../components/shared/CreatedByComponent';
import React, { Fragment } from 'react';
import HeadComponent from '../components/seo/HeadComponent';
import AppInfo from '../AppInfo';
import '../index.css';
function App() {
  return (
    <Fragment>
      <HeadComponent />
      <div className="box-launcher">
        <HeaderComponent appname={AppInfo.appname} />
        <div className="grid-display">
        <FilterComponent />
        <MissionListComponent />
        </div>
      </div>
      <CreatedByComponent name={AppInfo.developedby} />
    </Fragment>
  );
}

export default App;
