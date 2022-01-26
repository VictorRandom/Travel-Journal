import React from "react";

export default function Card(props) {
    console.log(props.card)
  return (
    <div className="card">
      <img src={`./${props.card.img}`} alt="mount fuji" id="card-picture"></img>
      <div id="card-info">
        <div id="country">
          <img src="./maps.png" alt="maps" style={{ width: "10px" }}></img>
          <div id="location">{props.card.location}</div>
          <a
            href={`https://www.google.com/maps/place/${props.card.maps}/`}
            id="google-maps"
          >
            View on Google Maps
          </a>
        </div>
        <div id="place">
          <div>{props.card.place}</div>
        </div>
        <div id="date">{props.card.initialDate.day} {props.card.initialDate.month}, {props.card.initialDate.year} - {props.card.endDate.day} {props.card.endDate.month}, {props.card.endDate.year}</div>
        {/* <div id="date">{props.card.dayInitalDate} {props.card.monthInitalDate}, {props.card.yearInitalDate} - {props.card.dayEndDate} {props.card.monthEndDate}, {props.card.yearEndDate}</div> */}
        <div id="description">
            {props.card.description}
        </div>
      </div>
    </div>
  );
}
