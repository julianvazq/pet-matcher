import React from 'react';
import {
  QuestionContainer,
  Label,
  Input,
  Validation
} from '../styles/styled-components';

const InputQuestion = ({
  question,
  value,
  validation,
  validationMessage,
  handleChange
}) => {
  return (
    <QuestionContainer>
      <Label>{question}</Label>
      <Input
        type='text'
        value={value}
        onChange={handleChange}
        ref={input => input && value && input.focus()}
      />
      <br />
      {!validation && (
        <Validation style={{ marginTop: '1.5rem' }}>
          {validationMessage}
        </Validation>
      )}
    </QuestionContainer>
  );
};

export default InputQuestion;
