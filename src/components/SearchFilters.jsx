import Input from "../ui/Input";
import Button from "../ui/Button";
import Chip from "../ui/Chip";
import { useState } from "react";
export default function SearchFilters({
  allAnimals,
  setFilteredAnimals,
  animalType,
  setAnimalType,
  getAnimals,
}) {
  const [searchAnimal, setSearchAnimal] = useState("");
  const handleSearchChange = (event) => {
    setSearchAnimal(event.target.value);
  };
  const handleTypeChange = (type) => {
    setAnimalType(type);
    getAnimals(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = allAnimals.filter((animal) =>
      animal.name.toLowerCase().includes(searchAnimal.toLowerCase())
    );
    setFilteredAnimals(results);
    setSearchAnimal("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <Input
        id="search"
        className="control"
        value={searchAnimal}
        onChange={handleSearchChange}
      >
        Search for animals
      </Input>
      <div>
        <Chip
          label="Dogs"
          isSelected={animalType === "dogs"}
          onClick={() => handleTypeChange("dogs")}
        />
        <Chip
          label="Cats"
          isSelected={animalType === "cats"}
          onClick={() => handleTypeChange("cats")}
        />
        <Chip
          label="Birds"
          isSelected={animalType === "birds"}
          onClick={() => handleTypeChange("birds")}
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
