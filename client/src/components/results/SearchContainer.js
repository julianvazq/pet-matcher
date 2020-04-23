import React, { useState } from 'react';
import { PrimaryButton, Label, Input } from '../styles/styled-components';
import {
  genderOptions,
  sizeOptions,
  ageOptions,
  distanceOptions,
} from './searchOptions';
import Select from 'react-select';

const SearchContainer = ({ setParams }) => {
  const [selectedGenders, setSelectedGenders] = useState([
    genderOptions[0],
    genderOptions[1],
  ]);
  const [selectedSizes, setSelectedSizes] = useState([
    sizeOptions[0],
    sizeOptions[1],
    sizeOptions[2],
    sizeOptions[3],
  ]);
  const [selectedAges, setSelectedAges] = useState([
    ageOptions[0],
    ageOptions[1],
    ageOptions[2],
  ]);
  const [selectedDistance, setSelectedDistance] = useState([
    distanceOptions[2],
  ]);
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
    // TODO: WHEN > 5, ALLOW DELETE BUT NOT ADD
    if (zipCode.length > 5) {
      setZipCode(e.target.value);
    } else {
      setZipCode(e.target.value);
    }
    console.log('Zip Code: ', zipCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParams({
      gender: selectedGenders,
      sizes: selectedSizes,
      ages: selectedAges,
      distance: selectedDistance,
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
        placeholder='Enter zip code...'
        value={zipCode}
        onChange={handleZipCode}
      />
      <PrimaryButton type='submit'>Search</PrimaryButton>
    </form>
  );
};

export default SearchContainer;
