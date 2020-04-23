import React, { useEffect, useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { PageContainer, PrimaryButton } from '../styles/styled-components';
import Alert from './Alert';
import Loading from './Loading';
import ImageSlider from './ImageSlider';

const PetDetails = ({ match, history, petInfo }) => {
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getBreeds = () => {
    let breeds = pet.breeds.primary || null;
    if (pet.breeds.secondary) {
      breeds += `, ${pet.breeds.secondary}`;
    }
    return breeds;
  };

  useEffect(() => {
    const fetchPet = async () => {
      const resPet = await fetch(`/${match.params.id}`);

      // // Checks if response is ok (200)
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
    min-height: initial;
    max-width: 1000px;
    padding: 1rem;

    @media (min-width: 800px) {
      padding: 2rem 1rem;
    }

    @media (min-width: 1000px) {
      padding: 2rem;
    }
  `;

  const FlexContainer = styled.article`
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  `;

  const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    height: fit-content;
    position: relative;

    @media (min-width: 800px) {
      max-width: 500px;
    }
  `;

  const AdoptButton = styled(PrimaryButton)`
    margin-top: 1rem;
    text-align: center;
  `;

  const BackButton = styled(PrimaryButton)`
    background: hsl(50, 50%, 80%);
    margin-bottom: 2rem;
  `;

  const Location = styled.p`
    font-size: 1.125rem;
    color: hsl(55, 7%, 37%);
    margin-top: 0.5rem;
    text-transform: uppercase;
  `;

  const InfoContainer = styled.div`
    flex: 1 1 auto;
    padding: 1.5rem 2rem;
    margin-top: 1rem;
    background: hsl(50, 50%, 89%);
    border-radius: 0.5rem;
    position: relative;
    z-index: 0;

    @media (min-width: 800px) {
      padding: 0 2rem;
      margin-left: 2rem;
      margin-top: 0;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      box-shadow: inset 0px 0px 3px 1.5px hsla(50, 34%, 15%, 0.2);
      z-index: -1;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      box-shadow: inset 0 -3px 0 hsla(50, 38%, 88%, 0.7);
      z-index: -1;
    }
  `;

  const PrimaryDetails = styled.div`
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

  const PetName = styled.h1`
    font-size: 2rem;

    @media (min-width: 800px) {
      margin-top: 0.5rem;
    }
  `;

  const Description = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    max-width: 60ch;
    color: hsl(55, 15%, 43%);
    margin-bottom: 1.5rem;
  `;

  const List = styled.ul`
    list-style-type: none;
    display: grid;

    @media (min-width: 425px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }
  `;

  const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: hsl(55, 15%, 43%);

    h2 {
      font-size: 1rem;
      font-weight: 400;
    }

    p {
      font-size: 1.25rem;
      color: hsl(50, 12%, 22%);
      max-width: 15ch;
    }
  `;

  const Subtitle = styled.h2`
    font-size: 1.5rem;
    margin: 1.5rem 0;
  `;

  const displayPet = pet && (
    <FlexContainer>
      <ImgContainer>
        <ImageSlider photos={pet.photos} type='details' />
        <AdoptButton as='a' href={pet.url} target='_blank'>
          Adopt Me
        </AdoptButton>
      </ImgContainer>
      <InfoContainer>
        <PrimaryDetails>
          <PetName>
            {pet.name.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase())}
          </PetName>
          <Location>{`${pet.contact.address.city}, ${pet.contact.address.state}, ${pet.contact.address.postcode}`}</Location>
          <Description>{pet.description}</Description>
          <List>
            <ListItem>
              <h2>Breed</h2>
              <p>{getBreeds()}</p>
            </ListItem>
            <ListItem>
              <h2>Age</h2>
              <p>{pet.age}</p>
            </ListItem>
            <ListItem>
              <h2>Size</h2>
              <p>{pet.size}</p>
            </ListItem>
            <ListItem>
              <h2>Gender</h2>
              <p>{pet.gender}</p>
            </ListItem>
          </List>
        </PrimaryDetails>
        <Subtitle>Additional Details</Subtitle>
        <List>
          <ListItem>
            <h2>Mixed</h2>
            {pet.breeds.mixed ? <p>Yes</p> : <p>No</p>}
          </ListItem>
          {pet.coat && (
            <ListItem>
              <h2>Coat</h2>
              <p>{pet.coat}</p>
            </ListItem>
          )}
          <ListItem>
            <h2>House Trained</h2>
            {pet.attributes.house_trained ? <p>Yes</p> : <p>No</p>}
          </ListItem>
          <ListItem>
            <h2>Spayed or Neutered</h2>
            {pet.attributes.spayed_neutered ? <p>Yes</p> : <p>No</p>}
          </ListItem>
          <ListItem>
            <h2>Special Needs</h2>
            {pet.attributes.special_needs ? <p>Yes</p> : <p>No</p>}
          </ListItem>
          <ListItem>
            <h2>Shots Up To Date</h2>
            {pet.attributes.shots_current ? <p>Yes</p> : <p>No</p>}
          </ListItem>
          {pet.environment.cats ||
          pet.environment.dogs ||
          pet.environment.children ? (
            <ListItem>
              <h2>Good With</h2>
              {pet.environment.dogs && <p>Other dogs</p>}
              {pet.environment.children && <p>Children</p>}
              {pet.environment.cats && <p>Cats</p>}
            </ListItem>
          ) : null}
        </List>
      </InfoContainer>
    </FlexContainer>
  );

  // console.log(history);
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
        <Fragment>
          <BackButton onClick={history.goBack}>Back to results</BackButton>
          {displayPet}
        </Fragment>
      )}
    </PetDetailsContainer>
  );
};

export default withRouter(PetDetails);
