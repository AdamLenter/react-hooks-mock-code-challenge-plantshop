import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, plantsLoaded }) {
  if(plantsLoaded) {
    return (
      <ul className="cards">
        {
        plants.map((plant) => {
          return(
            <PlantCard key = {plant.id} plant = {plant} />
          )
        })
        }
      </ul>
    );
    }
  else {
    return(
      <p>Loading... Loading... Loading...</p>
    )
  }
}

export default PlantList;
