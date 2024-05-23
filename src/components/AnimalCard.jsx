import React, { useCallback } from "react";
import { getAnimalApi } from "../api/animalsApi";

function AnimalCard({
  setSelectedAnimal,
  animalType,
  ...animal
}) {

  const getAnimalDetails = useCallback(async (id) => {
    try {
      const animalDetails = await getAnimalApi(animalType, id);
      setSelectedAnimal(animalDetails);
      console.log("Animal details:", animalDetails);
    } catch (error) {
      console.error("Error fetching animal details:", error);
    }
  }, [animalType, setSelectedAnimal]);
  return (
    <li onClick={() => getAnimalDetails(animal.id)}>
      <article className="animal-item">
        <img src={animal.image} alt={animal.name} width="200" />
        <div>
          <h2>{animal.name}</h2>
          <p>
            {animalType === "birds" ? animal.place_of_found : animal.origin}
          </p>
        </div>
      </article>
    </li>
  );
}

export default React.memo(AnimalCard);
