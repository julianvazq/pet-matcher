import React, { useState, useEffect } from 'react';
import { PrimaryButton, Label, Input } from '../styles/styled-components';
import styled from 'styled-components';
import {
  genderOptions,
  sizeOptions,
  ageOptions,
  distanceOptions,
} from './searchOptions';
import Select from 'react-select';

const ValidationMessage = styled.p`
  /* opacity: ${(props) => (props.isZipCodeValid ? 0 : 1)}; */
  /* transition: opacity 250ms ease-in; */
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
      <Select
        isMulti
        value={selectedGenders}
        onChange={handleGenders}
        options={genderOptions}
      />
      <Select
        isMulti
        value={selectedSizes}
        onChange={handleSizes}
        options={sizeOptions}
      />
      <Select
        isMulti
        value={selectedAges}
        onChange={handleAges}
        options={ageOptions}
      />
      <Select
        value={selectedDistance}
        onChange={handleDistance}
        options={distanceOptions}
      />
      <Input
        type='number'
        maxLength='5'
        placeholder='Enter zip code...'
        value={zipCode}
        onChange={handleZipCode}
      />
      {isZipCodeValid === false && (
        <ValidationMessage isZipCodeValid={isZipCodeValid}>
          {validationMessage}
        </ValidationMessage>
      )}
      <PrimaryButton type='submit'>Search</PrimaryButton>
    </form>
  );
};

export default SearchContainer;
