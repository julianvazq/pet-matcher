import React, { useState, useEffect, useContext } from 'react';
import { PetContext } from './context/PetContext';

const Results = () => {
  const { sizes, ages, genders } = useContext(PetContext);

  useEffect(() => {
    async function fetchPets() {
      const sizesArray = [];
      const agesArray = [];
      const gendersArray = [];

      if (sizes) {
        sizes.forEach((key, value) => {
          if (key) {
            sizesArray.push(value);
          }
        });
      }
      if (ages) {
        ages.forEach((key, value) => {
          if (key) {
            agesArray.push(value);
          }
        });
      }
      if (genders) {
        genders.forEach((key, value) => {
          if (key) {
            gendersArray.push(value);
          }
        });
      }

      const resToken = await fetch(
        'https://api.petfinder.com/v2/oauth2/token',
        {
          body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_API_KEY}&client_secret=${process.env.REACT_APP_SECRET}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST'
        }
      );
      const dataToken = await resToken.json();
      const TOKEN = dataToken.access_token;

      const resPets = await fetch(
        `https://api.petfinder.com/v2/animals?type=dog&status=adoptable&size=${sizesArray.join(
          ','
        )}&age=${agesArray.join(',')}&gender=${gendersArray.join(',')}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );
      const pets = resPets.json();
      console.log(pets);
    }
    fetchPets();
  }, []);

  return <div>This are the results</div>;
};

export default Results;
