import React , { useState}from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


// Your implementation here to fetch and display plant data from an API or local storage
  // and implement filtering and sorting functionality as described in the requirements
function PlantPage() {
  
  const [searchedPlant, setSearchedPlant] = useState('')
  const [plants, setPlants] = useState([])

  function handleAddPlant(newPlant) {
    const updatedPlantList = [...plants, newPlant]
    setPlants(updatedPlantList)
  }

         
    return(
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search   setSearchplant={setSearchedPlant} />
      <PlantList  plants={plants} searchedPlant={searchedPlant}  setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
