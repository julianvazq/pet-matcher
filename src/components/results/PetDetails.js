import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageContainer } from '../styles/styled-components';
import Alert from './Alert';
import Loading from './Loading';

const PetDetails = ({ match }) => {
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPet = async () => {
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

      const resPet = await fetch(
        `https://api.petfinder.com/v2/animals/${match.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );

      // Checks if response is ok (200)
      if (!resPet.ok) {
        setError(true);
      }

      const pet = await resPet.json();
      setPet(pet.animal);
      setIsLoading(false);
    };
    setIsLoading(true);
    try {
      fetchPet();
    } catch (e) {
      console.log('Oh no, something went wrong', e);
    }
  }, []);

  const PetDetailsContainer = styled(PageContainer)`
    background: hsl(50, 50%, 89%);
  `;

  const FlexContainer = styled.article`
    display: flex;
  `;

  const ImgContainer = styled.div`
    max-width: 500px;
  `;

  const displayPet = pet && (
    <FlexContainer>
      <ImgContainer>
        <img
          src={pet?.photos[0]?.large}
          alt={pet.name}
          style={{
            objectFit: 'cover',
            display: 'block',
            width: '100%',
            // height: '250px',
            borderRadius: '0.5rem'
          }}
        />
      </ImgContainer>
      <h1>{pet && pet.name}</h1>
    </FlexContainer>
  );

  return (
    <PetDetailsContainer>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Alert
          message="Sorry, couldn't load pet."
          action='Want to try clicking a different pet?'
          buttonText='Go back'
        />
      ) : (
        displayPet
      )}
    </PetDetailsContainer>
  );
};

export default PetDetails;
