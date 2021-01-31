import React from 'react';
import LazyLoad from 'react-lazyload';
const MissionComponent = ({ value }) => {
  const {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    rocket,
    links
  } = value;
  const NA = 'Not Available';
  const land_success = rocket.first_stage.cores[0].land_success;
  const mission_ids_display = mission_id.join('')
    ? mission_id.map(e => <li key={e}>{e}</li>)
    : NA;
  const image =
    links && links.mission_patch
      ? links.mission_patch
      : 'https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png';
  return (
    <div className="mission">
      <LazyLoad>
        <img src={image} alt={mission_name} className="img-mission" />
      </LazyLoad>
      <div className="text-mission">
        <span className="mission_headings">
          {mission_name} #{flight_number}
        </span>
      </div>
      <div className="mission-dv">
        <div>
          <span className="mission_headings">Mission Ids:</span>
        </div>
        <span className="mission_value">{mission_ids_display}</span>
      </div>

      <div className="mission-dv">
        <span className="mission_headings">Launch Year:</span>
        <span className="mission_value">{launch_year}</span>
      </div>
      <div className="mission-dv">
        <span className="mission_headings">Successful Launching:</span>
        <span className="mission_value">
          {launch_success === undefined ? NA : launch_success.toString()}
        </span>
      </div>
      <div className="mission-dv">
        <span className="mission_headings">Successful Landing:</span>
        <span className="mission_value">
          {land_success === null || land_success === undefined
            ? NA
            : land_success.toString()}
        </span>
      </div>
    </div>
  );
};

export default MissionComponent;
