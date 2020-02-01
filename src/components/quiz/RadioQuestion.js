import React, { Fragment } from 'react';

const RadioQuestion = ({ question, answers, currentValue, handleChange }) => {
  return (
    <div>
      <label>{question}</label>
      <br />
      {answers.map(answer => {
        return (
          <Fragment key={answer.text}>
            <input
              type='radio'
              checked={currentValue === answer.value}
              value={answer.value}
              onChange={handleChange}
            />
            {answer.text}
            <br />
          </Fragment>
        );
      })}
    </div>
  );
};

export default RadioQuestion;
