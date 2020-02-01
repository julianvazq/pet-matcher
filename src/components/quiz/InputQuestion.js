import React, { useEffect, useRef } from 'react';
import { QuestionContainer, Label, Input } from '../styles/styled-components';

const InputQuestion = ({ label, value, handleChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (value && value.length !== 5) {
      inputRef.current.focus();
    }
  }, [value]);

  return (
    <QuestionContainer>
      <Label>{label}</Label>
      <Input
        type='text'
        value={value}
        onChange={handleChange}
        // autofocus='true'
        ref={inputRef}
        // ref={input => input && value && input.focus()}
      />
    </QuestionContainer>
  );
};

export default InputQuestion;
