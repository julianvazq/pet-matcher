import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { FaDog } from 'react-icons/fa';

const SelectContainer = styled.div`
  margin-top: 2rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(50, 12%, 22%);
`;

const DogIcon = styled(FaDog)`
  margin-left: 0.125rem;
`;

const StyledSelect = styled(Select)``;

const BreedFilter = ({ value, onChange, options }) => {
  return (
    <SelectContainer>
      <Label>
        Filter by breed <DogIcon />
      </Label>
      <StyledSelect value={value} onChange={onChange} options={options} />
    </SelectContainer>
  );
};

export default BreedFilter;
