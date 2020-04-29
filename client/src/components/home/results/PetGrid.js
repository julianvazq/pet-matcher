import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PetCard from '../pet_card/PetCard';
import useViewportWidth from '../../hooks/useViewportWidth';
import { MdMoreHoriz } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import ResultsInformation from './ResultsInformation';
import BreedFilter from './BreedFilter';

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
  const [breedOptions, setBreedOptions] = useState();
  const [selectedBreed, setSelectedBreed] = useState({
    value: 'All',
    label: 'All',
  });

  const handleBreed = (selectedBreed) => {
    setSelectedBreed(selectedBreed);
  };

  useEffect(() => {
    if (width > 1000) {
      setDesktopView(true);
    } else {
      setDesktopView(false);
    }
  }, [width]);

  useEffect(() => {
    const breedOptions = getBreedOptions();
    setBreedOptions(breedOptions);
  }, [pets]);

  const getBreedOptions = () => {
    const breedArrays = pets.map((pet) => [
      pet.breeds.primary,
      pet.breeds.secondary,
    ]);
    const allBreeds = breedArrays.flat();
    const uniqueBreeds = [
      ...new Set(allBreeds.filter((breed) => breed !== null)),
    ];

    const breedOptions = uniqueBreeds.map((breed) => ({
      value: breed,
      label: breed,
    }));
    breedOptions.unshift({ value: 'All', label: 'All' });

    return breedOptions;
  };

  const filteredPets =
    selectedBreed.value === 'All'
      ? pets
      : pets.filter(
          (pet) =>
            pet.breeds.primary === selectedBreed.value ||
            pet.breeds.secondary === selectedBreed.value
        );

  return (
    <>
      <ResultsInformation showing={pets.length} total={totalResults} />
      <BreedFilter
        value={selectedBreed}
        onChange={handleBreed}
        options={breedOptions}
      />
      <Grid>
        {filteredPets &&
          filteredPets.map(
            (pet) =>
              pet.photos.length > 0 && (
                <PetCard
                  key={+pet.id + Math.floor(Math.random() * 1000) + 1}
                  petInfo={pet}
                  desktopView={desktopView}
                />
              )
          )}
      </Grid>
      {selectedBreed.value === 'All' && currentPage < totalPages && (
        <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
          More {loadingMore ? <SpinnerIcon /> : <MoreIcon />}
        </PaginationButton>
      )}
    </>
  );
};

export default PetGrid;
