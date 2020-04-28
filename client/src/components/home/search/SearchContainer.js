import React, { useState } from 'react';
import styled from 'styled-components';
import {
  genderOptions,
  sizeOptions,
  ageOptions,
  distanceOptions,
} from './searchOptions';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    max-width: 80%;
    margin: auto;
  }

  @media (min-width: 800px) {
    max-width: 700px;
  }
`;

const PrimaryButton = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: inherit;
  cursor: pointer;
  background: hsl(0, 0%, 79%);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07);
  display: block;
  margin: 2rem auto 0 auto;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

const ValidationMessage = styled.p`
  margin-top: 0.25rem;

  @media (min-width: 600px) {
    text-align: right;
  }
`;

const SearchContainer = ({ handleParams }) => {
  const [selectedGenders, setSelectedGenders] = useState([
    genderOptions[0],
    genderOptions[1],
  ]);
  const [selectedSizes, setSelectedSizes] = useState([
    sizeOptions[0],
    sizeOptions[1],
    sizeOptions[2],
  ]);
  const [selectedAges, setSelectedAges] = useState([
    ageOptions[0],
    ageOptions[1],
    ageOptions[2],
  ]);
  const [selectedDistance, setSelectedDistance] = useState(distanceOptions[2]);
  const [zipCode, setZipCode] = useState('');
  const [isZipCodeValid, setIsZipCodeValid] = useState(null);
  const [validationMessage, setValidationMessage] = useState(
    'Please enter a valid US zip code.'
  );

  const handleGenders = (selectedGenders) => {
    setSelectedGenders(selectedGenders);
    console.log(`Genders:`, selectedGenders);
  };

  const handleSizes = (selectedSizes) => {
    setSelectedSizes(selectedSizes);
    console.log(`Sizes:`, selectedSizes);
  };

  const handleAges = (selectedAges) => {
    setSelectedAges(selectedAges);
    console.log(`Ages:`, selectedAges);
  };

  const handleDistance = (selectedDistance) => {
    setSelectedDistance(selectedDistance);
    console.log(`Max. Distance:`, selectedDistance);
  };

  const handleZipCode = (e) => {
    setIsZipCodeValid(null);
    if (zipCode.length < 5) {
      setZipCode(e.target.value);
    } else {
      setZipCode(e.target.value.slice(0, 5));
    }
    console.log('Zip Code: ', zipCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendParams();
  };

  const sendParams = () => {
    const gendersArray =
      selectedGenders && selectedGenders.map((gender) => gender.value);
    const sizesArray = selectedSizes && selectedSizes.map((size) => size.value);
    const agesArray = selectedAges && selectedAges.map((age) => age.value);
    const distance = selectedDistance.value;

    if (zipCode.length !== 5) {
      setIsZipCodeValid(false);
      // Make validation message disappear
      setTimeout(() => setValidationMessage(''), 2500);
      setValidationMessage('Please enter a valid US zip code.');
    } else {
      handleParams({
        genders: gendersArray || [
          genderOptions[0].value,
          genderOptions[1].value,
        ],
        sizes: sizesArray || [
          sizeOptions[0].value,
          sizeOptions[1].value,
          sizeOptions[2].value,
        ],
        ages: agesArray || [
          ageOptions[0].value,
          ageOptions[1].value,
          ageOptions[2].value,
        ],
        distance: distance,
        zipCode: zipCode,
      });
    }

    if (!selectedGenders) {
      setSelectedGenders([genderOptions[0], genderOptions[1]]);
    }

    if (!selectedSizes) {
      setSelectedSizes([sizeOptions[0], sizeOptions[1], sizeOptions[2]]);
    }

    if (!selectedAges) {
      setSelectedAges([ageOptions[0], ageOptions[1], ageOptions[2]]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGrid>
        <CustomSelect
          isMulti={true}
          value={selectedGenders}
          onChange={handleGenders}
          options={genderOptions}
          label='Genders'
        />
        <CustomSelect
          isMulti={true}
          value={selectedSizes}
          onChange={handleSizes}
          options={sizeOptions}
          label='Sizes'
        />
        <CustomSelect
          isMulti={true}
          value={selectedAges}
          onChange={handleAges}
          options={ageOptions}
          label='Ages'
        />
        <CustomSelect
          isMulti={false}
          value={selectedDistance}
          onChange={handleDistance}
          options={distanceOptions}
          label='Maximum distance'
        />
        <CustomInput value={zipCode} onChange={handleZipCode} />
        {isZipCodeValid === false && (
          <ValidationMessage isZipCodeValid={isZipCodeValid}>
            {validationMessage}
          </ValidationMessage>
        )}
        <PrimaryButton type='submit'>Search</PrimaryButton>
      </FormGrid>
    </form>
  );
};

export default SearchContainer;
