import React from 'react';
import { QuestionContainer, Label, Input } from '../styles/styled-components';

const InputQuestion = ({ label, value, handleChange }) => {
  return (
    <QuestionContainer>
      <Label>{label}</Label>
      <Input
        type='text'
        value={value}
        onChange={handleChange}
        // autoFocus={false}
        ref={input => input && value && input.focus()}
      />
    </QuestionContainer>
  );
};

export default InputQuestion;
