import React from 'react';
import styled from 'styled-components';
import { Label } from '../../styles/styled-components';

const InputContainer = styled.div`
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

export const Input = styled.input`
  padding: 0.325rem 0.5rem;
  font-size: 1.25rem;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;

  &:focus {
    border-color: hsla(50, 38%, 88%, 0.7);
  }
`;

const CustomInput = ({ value, onChange }) => {
  return (
    <InputContainer>
      <Label>Zip Code</Label>
      <Input
        type='number'
        maxLength='5'
        placeholder='Enter zip code'
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default CustomInput;
