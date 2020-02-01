import React from 'react';
import styled from 'styled-components';
import { QuestionContainer, Label } from './form-styles';

const InputQuestion = ({ value, handleChange }) => {
  const Input = styled.input`
    height: 30px;
    width: 150px;
    border-radius: 0.2rem;
    border: none;
  `;

  return (
    <QuestionContainer>
      <Label>Zip Code</Label>
      <Input type='text' value={value} onChange={handleChange} />
    </QuestionContainer>
  );
};

export default InputQuestion;
