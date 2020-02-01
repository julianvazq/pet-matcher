import React, { Fragment } from 'react';
import styled from 'styled-components';

const QuizQuestion = ({ question, answers, handleChange, items }) => {
  const QuestionContainer = styled.div`
    margin: 1rem 0;
    padding: 1.5rem;
    background: hsl(220, 34%, 75%);
    border-radius: 0.5rem;
  `;

  const Label = styled.label`
    display: block;
    position: relative;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  `;

  /* Custom checkbox */

  const CheckboxContainer = styled.div`
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  `;

  const Input = styled.input`
    margin-right: 0.5rem;
    vertical-align: middle;
  `;
  /* ----------------- */

  const Answer = styled.p`
    font-size: 1.125rem;
    display: inline-block;
  `;

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
