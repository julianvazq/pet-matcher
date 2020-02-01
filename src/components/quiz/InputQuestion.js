import React from 'react';
import { QuestionContainer, Label, Input } from '../styles/styled-components';

const InputQuestion = ({ value, handleChange }) => {
  return (
    <QuestionContainer>
      <Label>Zip Code</Label>
      <Input type='text' value={value} onChange={handleChange} />
    </QuestionContainer>
  );
};

export default InputQuestion;
