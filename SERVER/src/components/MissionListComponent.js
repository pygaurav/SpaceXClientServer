import React, { useContext } from 'react';
import LauncherContext from '../context/launcherContext';
import MissionComponent from './MissionComponent';
import Spinner from '../layout/Spinner';
import NoRecordComponent from './shared/NoRecordComponent';
const MissionListComponent = () => {
  const { missions, loading } = useContext(LauncherContext);
  let mission = missions.map(e => {
    return <MissionComponent key={e.flight_number} value={e} />;
  });
  return (
    <div className="flex-mission">
      {loading ? (
        <Spinner />
      ) : missions.length > 0 ? (
        mission
      ) : (
        <NoRecordComponent />
      )}
    </div>
  );
};

export default MissionListComponent;
