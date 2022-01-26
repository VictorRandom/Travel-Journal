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
      id = {card.id}
      img = {card.img}
      location = {card.location}
      maps = {card.maps}
      place = {card.place}
      dayInitalDate = {card.initialDate.day}
      monthInitalDate = {card.initialDate.month}
      yearInitalDate = {card.initialDate.year}
      dayEndDate = {card.endDate.day}
      monthEndDate = {card.endDate.month}
      yearEndDate = {card.endDate.year}
      description = {card.description}
    />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {cardInfo}
      </div>
    </div>
  );
}

export default App;
