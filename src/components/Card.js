import React from 'react';


export default function Card(){
    
    return(
        <div className="card">
            <img src="./mount-fuji.jpg" alt="mount fuji" style={{width: '125px', height: '168px'}}></img>
            <div>
                <div id="">
                    <img src="./maps.png" alt="maps" style={{width: '10px',}}></img>
                    <div id="location">JAPAN</div>
                    <div id="google-maps">View on Google Maps</div>
                </div>
                <div>
                    <h2>Mount Fuji</h2>
                </div>
                <div>
                    12 Jan, 2021 - 24 Jan, 2021
                </div>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    )
}