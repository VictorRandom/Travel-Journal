import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './components/data';

function App() {

  console.log(data)
  
  const cardInfo = data.map((card) => {
    return (
    <Card 
      key={card.id}
      card={card}
      // img = {card.img}
      // location = {card.location}
      // maps = {card.maps}
      // place = {card.place}
      // dayInitialDate = {card.initialDate.day}
      // monthInitialDate = {card.initialDate.month}
      // yearInitialDate = {card.initialDate.year}
      // dayEndDate = {card.endDate.day}
      // monthEndDate = {card.endDate.month}
      // yearEndDate = {card.endDate.year}
      // description = {card.description}
    />
    )
  });

  return (
    <div className="container">
      <div className="App">
        <Navbar />
        <div className="cards">
          {cardInfo}
        </div>
      </div>
    </div>
  );
}

export default App;
