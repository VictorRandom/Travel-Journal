import React from "react";

export default function Card(props) {
    console.log(props)
  return (
    <div className="card">
      <img src={`./${props.img}`} alt="mount fuji" id="card-picture"></img>
      <div id="card-info">
        <div id="country">
          <img src="./maps.png" alt="maps" style={{ width: "10px" }}></img>
          <div id="location">{props.location}</div>
          <a
            href={`https://www.google.com/maps/place/${props.maps}/`}
            id="google-maps"
          >
            View on Google Maps
          </a>
        </div>
        <div id="place">
          <div>{props.place}</div>
        </div>
        <div id="date">{props.dayInitalDate} {props.monthInitalDate}, {props.yearInitalDate} - {props.dayEndDate} {props.monthEndDate}, {props.yearEndDate}</div>
        <div id="description">
            {props.description}
        </div>
      </div>
    </div>
  );
}
