import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Alert from './Alert';
import Loading from './Loading';
import PetCard from './PetCard';

const Results = ({ params }) => {
  const [pets, setPets] = useState([]);
  const [status, setStatus] = useState('success');

  useEffect(() => {
    async function fetchPets() {
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(params),
      };
      const resPets = await fetch('/test', options);
      console.log(resPets);

      // Checks if response is ok (200)
      // if (!resPets.ok) {
      //   setStatus('error');
      //   return;
      // }

      const pets = await resPets.json();

      setPets(pets);
      setStatus('success');
    }

    try {
      if (params) {
        setStatus('loading');
        fetchPets();
      }
    } catch (e) {
      setStatus('error');
      console.log('Oh no, something went wrong', e);
    }
  }, [params]);

  const Grid = styled.div`
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    margin: 2rem auto;
    /* grid-template-columns: 1fr; */
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
    align-items: start;

    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `;

  const displayPets = () => {
    if (pets.length) {
      return (
        <Grid>
          {pets &&
            pets.map(
              (pet) =>
                pet.photos.length > 0 && <PetCard key={pet.id} petInfo={pet} />
            )}
        </Grid>
      );
    } else {
      return (
        <Alert
          message='Sorry, no pets found.'
          action='Want to try a different search?'
          buttonText='Go back'
        />
      );
    }
  };

  if (status === 'success') {
    if (!params) {
      return (
        <Alert
          message='Find pets in your area!'
          action='Enter search input'
          buttonText='Go back'
        />
      );
    }

    return displayPets();
  }

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return (
      <Alert
        message='Oh no, something went wrong.'
        action='Please try again.'
        buttonText='Go back.'
      />
    );
  }
};

export default Results;
