import LauncherState from "./context/LauncherState";
import FilterComponent from "./components/FilterComponent";
import MissionListComponent from "./components/MissionListComponent";
import HeaderComponent from "./components/shared/HeaderComponent";
import CreatedByComponent from "./components/shared/CreatedByComponent";
import { Fragment } from "react";
import {BrowserRouter} from 'react-router-dom'
import AppInfo from "./AppInfo";
function App() {
  return (
    <BrowserRouter>
    <Fragment>
      <div className="box-launcher">
      <HeaderComponent appname={AppInfo.appname} />
        <LauncherState>
          <div className="grid-display">
            <FilterComponent />
            <MissionListComponent />
          </div>
        </LauncherState>
      </div>
      <CreatedByComponent name={AppInfo.developedby} />
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
