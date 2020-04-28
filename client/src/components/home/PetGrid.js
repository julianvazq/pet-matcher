import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PetCard from './PetCard';
import useViewportWidth from './useViewportWidth';
import { MdPets, MdMoreHoriz } from 'react-icons/md';
import { GiDogBowl } from 'react-icons/gi';
import { FaSpinner } from 'react-icons/fa';

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

const ResultsInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ResultsInfo = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(0, 0%, 45%);

  span {
    font-weight: 700;
    color: hsl(50, 12%, 22%);
  }
`;

const PawIcon = styled(MdPets)`
  transform: translateY(2px);
  margin-left: 0.25rem;
`;

const FoodBowlIcon = styled(GiDogBowl)`
  transform: translateY(2px);
  margin-left: 0.25rem;
`;

const MoreIcon = styled(MdMoreHoriz)`
  transform: translateY(12px);
  margin-left: 0.5rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled(FaSpinner)`
  animation: ${rotate} 2s linear infinite;
  vertical-align: middle;
  margin-left: 0.5rem;
`;

const PaginationButton = styled.button`
  margin: auto;
  display: block;
  font-size: 1.75rem;
  padding: 0.5rem 2rem;
  font-weight: 700;
  border-radius: 0.3rem;
  background: hsl(0, 0%, 79%);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07);
`;

const PetGrid = ({
  pets,
  totalResults,
  totalPages,
  currentPage,
  setCurrentPage,
  loadingMore,
}) => {
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
    <>
      <ResultsInfoContainer>
        <ResultsInfo>
          Showing:{' '}
          <span>
            {pets.length}
            <FoodBowlIcon />
          </span>
        </ResultsInfo>
        <ResultsInfo>
          Total results:{' '}
          <span>
            {totalResults}
            <PawIcon />
          </span>
        </ResultsInfo>
      </ResultsInfoContainer>
      <Grid>
        {pets &&
          pets.map(
            (pet) =>
              pet.photos.length > 0 && (
                <PetCard key={pet.id} petInfo={pet} desktopView={desktopView} />
              )
          )}
      </Grid>
      {currentPage < totalPages && (
        <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
          More {loadingMore ? <SpinnerIcon /> : <MoreIcon />}
        </PaginationButton>
      )}
    </>
  );
};

export default PetGrid;
