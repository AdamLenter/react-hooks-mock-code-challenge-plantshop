import React, { useState } from "react";

function NewPlantForm( {addNewPlant}) {
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");

  function updatePlantName(e) {
    setNewPlantName(e.target.value);
  }

  function updatePlantImage(e) {
    setNewPlantImage(e.target.value)
  }

  function updatePlantPrice(e) {
    setNewPlantPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: newPlantName, 
      image: newPlantImage, 
      price: newPlantPrice
    }

    addNewPlant(newPlant);

    setNewPlantName("");
    setNewPlantImage("");
    setNewPlantPrice("");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantName} onChange = {updatePlantName} />
        <input type="text" name="image" placeholder="Image URL" value={newPlantImage} onChange = {updatePlantImage} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlantPrice} onChange = {updatePlantPrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
