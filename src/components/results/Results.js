import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { PetContext } from '../context/PetContext';
import PetCard from './PetCard';

const Results = () => {
  const { sizes, ages, genders, zip, distance, setToken } = useContext(
    PetContext
  );
  const [pets, setPets] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
      setToken(TOKEN);

      const resPets = await fetch(
        `https://api.petfinder.com/v2/animals?type=dog&status=adoptable&location=${zip}&distance=${distance}&size=${sizesArray.join(
          ','
        )}&age=${agesArray.join(',')}&gender=${gendersArray.join(',')}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );

      // Checks if response is ok (200)
      if (!resPets.ok) {
        setError(true);
      }

      const pets = await resPets.json();

      setPets(pets.animals);
    }

    setIsLoading(true);
    try {
      fetchPets();
      setIsLoading(false);
    } catch (e) {
      console.log('Oh no, something went wrong', e);
    }
  }, []);

  const Container = styled.div`
    max-width: 1200px;
    margin: 2rem 1rem;
    padding: 2rem;
    border-radius: 0.5rem;
    background: hsl(220, 40%, 90%);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
      0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
      0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
      0 100px 80px rgba(0, 0, 0, 0.02);

    @media (min-width: 1200px) {
      margin: 2rem auto;
    }
  `;

  const Grid = styled.div`
    display: grid;
    grid-gap: 2rem;
    margin: 2rem auto;
    grid-template-columns: 1fr;

    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `;

  return (
    <Container>
      <h1>Results</h1>
      <h2>Click on a pet to learn more!</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        'Oh no, something went wrong.'
      ) : (
        <Grid>
          {pets &&
            pets.map(
              pet =>
                pet.photos.length > 0 && <PetCard key={pet.id} petInfo={pet} />
            )}
        </Grid>
      )}
    </Container>
  );
};

export default Results;
