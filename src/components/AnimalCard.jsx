import axios from "axios";

export default function AnimalCard({
  setSelectedAnimal,
  animalType,
  ...animal
}) {
  const getAnimalDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/${animalType}/${id}`
      );
      const animal = response.data;
      setSelectedAnimal(animal);
    } catch (error) {
      console.error("Error fetching animal details:", error);
    }
  };
  const handleAnimalClick = (id) => {
    getAnimalDetails(id);
  };
  return (
    <li onClick={() => handleAnimalClick(animal.id)}>
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
