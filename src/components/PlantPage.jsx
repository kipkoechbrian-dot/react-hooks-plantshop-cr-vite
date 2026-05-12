import { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage() {
  // stores all plants
  const [plants, setPlants] = useState([]);

  // stores search value
  const [search, setSearch] = useState("");

  // fetch plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // add new plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // filter plants
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search search={search} setSearch={setSearch} />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;