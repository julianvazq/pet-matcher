import React from 'react';
import styled from 'styled-components';
import { Label } from '../../styles/styled-components';
import Select from 'react-select';

const customStyleMulti = {
  option: (provided, state) => ({
    ...provided,
  }),
  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     fontWeight: 600,
  //   }),
  multiValue: (provided, state) => {
    const color = 'black';
    const backgroundColor = 'hsl(50,50%,82%)';

    return { ...provided, color, backgroundColor };
  },
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-bottom: 1px solid hsla(50,34%,15%,0.2);

  @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
    /* align-items: ${(props) => props.isMulti && 'center'}; */
  }
`;

const StyledSelect = styled(Select)`
  margin-bottom: 0.5rem;
  display: inline-block;
  font-weight: 600;

  @media (min-width: 600px) {
    width: ${(props) => !props.isMulti && '50%'};
  }
`;

const CustomSelect = ({ value, onChange, options, isMulti, label }) => {
  return (
    <SelectContainer isMulti={isMulti}>
      <Label>{label}</Label>
      {isMulti ? (
        <StyledSelect
          isMulti
          value={value}
          onChange={onChange}
          options={options}
          styles={customStyleMulti}
        />
      ) : (
        <StyledSelect
          isMulti={isMulti}
          value={value}
          onChange={onChange}
          options={options}
        />
      )}
    </SelectContainer>
  );
};

export default CustomSelect;
