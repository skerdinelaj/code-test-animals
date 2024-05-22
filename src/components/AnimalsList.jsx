import AnimalCard from "./AnimalCard";

export default function AnimalsList({ filteredAnimals, animalType, setSelectedAnimal }) {
  return (
    <ul id="animals-list">
      {filteredAnimals.map((animal) => (
        <AnimalCard {...animal} key={animal.id}  {...{ setSelectedAnimal, animalType }} />
      ))}
    </ul>
  );
}
