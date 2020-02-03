import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { PageContainer } from '../styles/styled-components';
import { PetContext } from '../context/PetContext';
import PetCard from './PetCard';
import Alert from './Alert';
import Loading from './Loading';

const Results = () => {
  const { sizes, ages, genders, zip, distance } = useContext(PetContext);
  const [pets, setPets] = useState([]);
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
      setIsLoading(false);
    }

    setIsLoading(true);
    try {
      fetchPets();
    } catch (e) {
      console.log('Oh no, something went wrong', e);
    }
  }, []);

  const HeadingContainer = styled.div`
    margin: 0 1rem;

    @media (min-width: 600px) {
      margin: 0;
    }
  `;

  const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 0.5rem;
  `;

  const Subtitle = styled.h2`
    font-weight: 600;
    position: relative;
    padding-bottom: 1rem;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: hsla(50, 34%, 15%, 0.2);
    }
  `;

  const Grid = styled.div`
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    margin: 2rem auto;
    grid-template-columns: 1fr;

    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `;

  const displayPets = pets.length ? (
    <Grid>
      {pets &&
        pets.map(
          pet => pet.photos.length > 0 && <PetCard key={pet.id} petInfo={pet} />
        )}
    </Grid>
  ) : (
    <Alert
      message='Sorry, no pets found.'
      action='Want to try a different search?'
      buttonText='Go back'
    />
  );

  return (
    <PageContainer>
      <HeadingContainer>
        <Title>Results</Title>
        <Subtitle>Click on a pet to learn more!</Subtitle>
      </HeadingContainer>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Alert
          message='Oh no, something went wrong.'
          action='Please try again.'
          buttonText='Go back.'
        />
      ) : (
        displayPets
      )}
    </PageContainer>
  );
};

export default Results;
