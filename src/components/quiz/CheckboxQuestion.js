import React, { Fragment } from 'react';
import { QuestionContainer, Label } from './form-styles';

const QuizQuestion = ({ question, answers, handleChange, items }) => {
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
    </QuestionContainer>
  );
};

export default QuizQuestion;
