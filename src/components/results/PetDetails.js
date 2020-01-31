import React, { useEffect, useState, useContext } from 'react';
import { PetContext } from '../context/PetContext';

const PetDetails = ({ match }) => {
  const { token } = useContext(PetContext);
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      const resPet = await fetch(
        `https://api.petfinder.com/v2/animals/${match.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const pet = await resPet.json();
      setPet(pet.animal);
    };
    fetchPet();
  }, []);

  return (
    <div>
      <h1>{pet && pet.name}</h1>
    </div>
  );
};

export default PetDetails;
