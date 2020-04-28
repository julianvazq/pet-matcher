import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PetCard from './PetCard';
import useViewportWidth from './useViewportWidth';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  margin: 2rem auto;
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

const PetGrid = ({ pets }) => {
  const width = useViewportWidth();
  const [desktopView, setDesktopView] = useState(true);

  useEffect(() => {
    if (width > 1000) {
      setDesktopView(true);
    } else {
      setDesktopView(false);
    }
  }, [width]);

  return (
    <Grid>
      {pets &&
        pets.map(
          (pet) =>
            pet.photos.length > 0 && (
              <PetCard key={pet.id} petInfo={pet} desktopView={desktopView} />
            )
        )}
    </Grid>
  );
};

export default PetGrid;
