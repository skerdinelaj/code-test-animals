import { useEffect, useState, useRef } from "react";
import { getAnimalsApi } from "../api/animalsApi";
import SearchFilters from "../components/SearchFilters";
import AnimalsList from "../components/AnimalsList";
import AnimalCardModal from "../components/AnimalCardModal";

export default function HomePage() {
  const [allAnimals, setAllAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [animalType, setAnimalType] = useState("dogs");
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const getAnimals = async (type) => {
    try {
      const animals = await getAnimalsApi(type);
      setAllAnimals(animals);
      setFilteredAnimals(animals);
    } catch (error) {
      console.error("Error fetching animals:", error);
      throw error;
    }
  };

  useEffect(() => {
    getAnimals(animalType);
  }, [animalType]);

  return (
    <div>
      <SearchFilters
        {...{
          animalType,
          setFilteredAnimals,
          allAnimals,
          setAnimalType,
          getAnimals,
        }}
      />
      <AnimalsList {...{ filteredAnimals, setSelectedAnimal, animalType }} />
      {selectedAnimal && (
          <AnimalCardModal
            {...{  animalType, ...selectedAnimal, setSelectedAnimal }}
          />
      )}
    </div>
  );
}
