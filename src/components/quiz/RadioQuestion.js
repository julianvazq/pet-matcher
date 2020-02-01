import React, { Fragment } from 'react';
import { QuestionContainer, Label } from './form-styles';

const RadioQuestion = ({ question, answers, currentValue, handleChange }) => {
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
              <span class='radio-checkmark'></span>
            </label>

            <br />
          </Fragment>
        );
      })}
    </QuestionContainer>
  );
};

export default RadioQuestion;
