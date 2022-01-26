import React from 'react';


export default function Card(){
    
    return(
        <div className="card">
            <img src="./mount-fuji.jpg" alt="mount fuji" id="card-picture"></img>
            <div id="card-info">
                <div id="country">
                    <img src="./maps.png" alt="maps" style={{width: '10px',}}></img>
                    <div id="location">JAPAN</div>
                    <a href="https://www.google.com/maps/place/Jap%C3%A3o/" id="google-maps">View on Google Maps</a>
                </div>
                <div id="place">
                    <div>Mount Fuji</div>
                </div>
                <div id="date">
                    12 Jan, 2021 - 24 Jan, 2021
                </div>
                <div id="description">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </div>
            </div>
        </div>
    )
}