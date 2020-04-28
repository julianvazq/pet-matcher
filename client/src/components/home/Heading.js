import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../styles/styled-components';
import { GiDogBowl } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';

const Heading = () => {
  const HeadingContainer = styled.div`
    margin: 0 1rem 2rem 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid hsla(50, 34%, 15%, 0.2);
    text-align: center;
  `;

  const FadeInDiv = styled.div`
    animation: ${fadeIn} 1000ms ease-in;
  `;

  const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-family: 'Mali', cursive;

    @media (min-width: 375px) {
      font-size: 3rem;
    }
  `;

  const Subtitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    position: relative;
    padding-bottom: 1rem;
    color: hsl(50, 10%, 45%);
  `;

  const FoodBowlIcon = styled(GiDogBowl)`
    font-size: 2rem;
    margin-left: 0.5rem;
  `;

  const PawIcon = styled(MdPets)`
    font-size: 2rem;
    margin-right: 0.5rem;
  `;

  return (
    <HeadingContainer>
      <FadeInDiv>
        <PawIcon />
        <FoodBowlIcon />
        <Title>Dog Finder</Title>
        <Subtitle>Find your ideal companion.</Subtitle>
      </FadeInDiv>
    </HeadingContainer>
  );
};

export default Heading;
