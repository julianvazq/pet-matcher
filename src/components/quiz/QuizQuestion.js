import React, { useState, Fragment } from 'react';
import Input from './Input';

const QuizQuestion = ({ type, question, answers, handleChange, items }) => {
  return (
    <fieldset>
      <legend>{question}</legend>
      {answers.map(answer => {
        return (
          <Fragment key={answer.text}>
            <input
              type={type}
              checked={items.get(answer.value)}
              value={answer.value}
              onChange={handleChange}
            />
            {answer.text}
            <br />
          </Fragment>
        );
      })}
    </fieldset>
  );
};

export default QuizQuestion;
