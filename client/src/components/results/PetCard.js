import React from 'react';
import styled from 'styled-components';
import PetInformation from './PetInformation';
import ImageSlider from './ImageSlider';

const PetCard = ({ petInfo }) => {
  const FlexCard = styled.article`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: hsl(50, 50%, 89%);
    border-radius: 0.5rem;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
      0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
      0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
      0 100px 80px rgba(0, 0, 0, 0.02);
  `;

  return (
    <FlexCard>
      <ImageSlider photos={petInfo.photos} type='card' />
      <PetInformation petInfo={petInfo} />
    </FlexCard>
  );
};

export default PetCard;
