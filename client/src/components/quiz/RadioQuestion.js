import React, { Fragment } from 'react';
import {
  QuestionContainer,
  Label,
  Validation
} from '../styles/styled-components';

const RadioQuestion = ({
  question,
  answers,
  currentValue,
  validation,
  handleChange
}) => {
  return (
    <QuestionContainer>
      <Label>{question}</Label>
      {answers.map(answer => {
        return (
          <Fragment key={answer.text}>
            <label className='radio-container'>
              {' '}
              {answer.text}
              <input
                type='radio'
                checked={currentValue === answer.value}
                value={answer.value}
                onChange={handleChange}
              />
              <span className='radio-checkmark'></span>
            </label>

            <br />
          </Fragment>
        );
      })}
      {!validation && (
        <Validation>Please select at least one answer.</Validation>
      )}
    </QuestionContainer>
  );
};

export default RadioQuestion;
