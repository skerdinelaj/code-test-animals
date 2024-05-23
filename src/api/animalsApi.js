import axios from 'axios';

const animalsApi = {
  dogs: 'https://freetestapi.com/api/v1/dogs',
  cats: 'https://freetestapi.com/api/v1/cats',
  birds: 'https://freetestapi.com/api/v1/birds'
};

export const getAnimalsApi = async (animalType) => {
  try {
    const response = await axios.get(animalsApi[animalType]);
    return response.data;
    
  } catch (error) {
    console.error('Error fetching animals:', error);
    throw error;
  }
};

export const getAnimalApi = async (animalType, id) => {
  try {
    const response = await axios.get(animalsApi[animalType] + `/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching animal details:", error);
  }
};


