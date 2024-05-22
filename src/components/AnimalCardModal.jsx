import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

export default function AnimalCardModal({
  animalType,
  setSelectedAnimal,
  ...selectedAnimal
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (selectedAnimal && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [selectedAnimal, modalRef]);
  const closeModal = () => {
    modalRef.current.close();
    setSelectedAnimal(null);
  };
  return (
    <Modal ref={modalRef}>
      <div>
        <img src={selectedAnimal.image} alt={selectedAnimal.name} width="200" />
        <div>
          <h2>{selectedAnimal.name}</h2>
          <p>
            {animalType === "birds"
              ? selectedAnimal.species
              : selectedAnimal.origin}
          </p>
          <p>
            {animalType === "birds"
              ? selectedAnimal.place_of_found
              : selectedAnimal.temperament}
          </p>
          <p>
            {animalType === "birds"
              ? selectedAnimal.habitat
              : selectedAnimal.lifespan}
          </p>
          <p>{selectedAnimal.diet}</p>
        </div>
      </div>
      <p>{selectedAnimal.description}</p>
      <Button onClick={closeModal}>Close</Button>
    </Modal>
  );
}
