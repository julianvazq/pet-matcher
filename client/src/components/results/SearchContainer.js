import React, { useState, useEffect } from 'react';
import { PrimaryButton, Label, Input } from '../styles/styled-components';
import {
  genderOptions,
  sizeOptions,
  ageOptions,
  distanceOptions,
} from './searchOptions';
import Select from 'react-select';

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
    const gendersArray = selectedGenders.map((gender) => gender.value);
    const sizesArray = selectedSizes.map((size) => size.value);
    const agesArray = selectedAges.map((age) => age.value);
    const distance = selectedDistance.value;

    handleParams({
      genders: gendersArray,
      sizes: sizesArray,
      ages: agesArray,
      distance: distance,
      zipCode: zipCode || '20850',
    });
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
      <PrimaryButton type='submit'>Search</PrimaryButton>
    </form>
  );
};

export default SearchContainer;
