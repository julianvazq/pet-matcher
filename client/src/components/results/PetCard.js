import React, { useState } from 'react';
import styled from 'styled-components';
import PetInformation from './PetInformation';
import ImageSlider from './ImageSlider';

const PetCard = ({ petInfo, desktopView }) => {
  const [expandCard, setExpandCard] = useState(false);

  const handleExpandCard = () => {
    setExpandCard(!expandCard);
  };

  const FlexCard = styled.article`
    grid-column: ${expandCard ? '1/-1' : ''};
    display: flex;
    flex-direction: ${expandCard ? 'row' : 'column'};
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
      <ImageSlider photos={petInfo.photos} expandCard={expandCard} />
      <PetInformation
        petInfo={petInfo}
        dekstopView={desktopView}
        expandCard={desktopView ? expandCard : null}
        handleExpandCard={desktopView ? handleExpandCard : null}
      />
    </FlexCard>
  );
};

export default PetCard;
