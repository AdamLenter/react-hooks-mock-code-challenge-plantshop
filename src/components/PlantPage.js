import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [plantsLoaded, setPlantsLoaded] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  function addNewPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      },
    body: JSON.stringify(newPlant)
    })

    const newPlantList = [...plants, newPlant];
    setPlants(newPlantList);
  }

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
      .then((r)=>r.json())
      .then((plantList) => setPlants(plantList))
      .then(()=>setPlantsLoaded(true))   
      }, [])

  function updateSearchTerm(termToSearch) {
    setSearchTerm(termToSearch);
  }

  let displayedPlantList;

  if(searchTerm === "") {
    displayedPlantList = [...plants];
  }
  else {
    displayedPlantList = plants.filter((plant) => plant.name.toUpperCase().includes(searchTerm.toUpperCase()));
  }

  return (
    <main>
      <NewPlantForm addNewPlant = {addNewPlant} />
      <Search searchTerm = {searchTerm} updateSearchTerm = {updateSearchTerm} />
      <PlantList plants = {displayedPlantList} plantsLoaded = {plantsLoaded} />
    </main>
  );
}

export default PlantPage;
