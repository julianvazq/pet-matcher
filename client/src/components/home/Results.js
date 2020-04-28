import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import Loading from './Loading';
import PetGrid from './PetGrid';

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
      if (!resPets.ok) {
        setStatus('error');
        return;
      }

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

  const displayPets = () => {
    if (pets.length) {
      return <PetGrid pets={pets} />;
    } else {
      return (
        <Alert
          message='Sorry, no pets found.'
          action='Want to try a different search?'
        />
      );
    }
  };

  if (status === 'success') {
    if (!params) {
      return (
        <Alert
          message='Find pets in your area!'
          action='Enter search input above.'
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
