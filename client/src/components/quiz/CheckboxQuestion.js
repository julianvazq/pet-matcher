import React, { Fragment } from 'react';
import {
  QuestionContainer,
  Label,
  Validation
} from '../styles/styled-components';

const QuizQuestion = ({
  question,
  answers,
  validation,
  handleChange,
  items
}) => {
  return (
    <QuestionContainer>
      <Label>{question}</Label>
      {answers.map(answer => {
        return (
          <Fragment key={answer.text}>
            <label className='container'>
              {' '}
              {answer.text}
              <input
                type='checkbox'
                checked={items.get(answer.value)}
                value={answer.value}
                onChange={handleChange}
              />
              <span className='checkmark'></span>
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

export default QuizQuestion;
