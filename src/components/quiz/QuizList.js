import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { PetContext } from '../context/PetContext';
import styled from 'styled-components';
import QuizQuestion from './QuizQuestion';

const QuizList = props => {
  const { setSizes, setAges, setGenders } = useContext(PetContext);
  const [checkedSizes, setCheckedSizes] = useState(new Map());
  const [checkedAges, setCheckedAges] = useState(new Map());
  const [checkedGenders, setCheckedGenders] = useState(new Map());

  const onSubmit = e => {
    e.preventDefault();
    setSizes(checkedSizes);
    setAges(checkedAges);
    setGenders(checkedGenders);
    // Redirect
    props.history.push('/results');
  };

  const questions = [
    {
      type: 'checkbox',
      question: 'What is your ideal dog size?',
      answers: [
        {
          text: 'Small',
          value: 'small'
        },
        {
          text: 'Medium',
          value: 'medium'
        },
        {
          text: 'Large',
          value: 'large, xlarge'
        }
      ],
      items: checkedSizes,
      handleChange: function(e) {
        const { checked, value } = e.target;
        const newCheckedSizes = new Map(checkedSizes);
        newCheckedSizes.set(value, checked);
        setCheckedSizes(newCheckedSizes);
      }
    },
    {
      type: 'checkbox',
      question: 'What ages would you consider adopting?',
      answers: [
        {
          text: 'Baby',
          value: 'baby'
        },
        {
          text: 'Young',
          value: 'Young'
        },
        {
          text: 'Adult',
          value: 'adult'
        },
        {
          text: 'Senior',
          value: 'senior'
        }
      ],
      items: checkedAges,
      handleChange: function(e) {
        const { checked, value } = e.target;
        const newCheckedAges = new Map(checkedAges);
        newCheckedAges.set(value, checked);
        setCheckedAges(newCheckedAges);
      }
    },
    {
      type: 'checkbox',
      question: 'What is your preferred gender?',
      answers: [
        {
          text: 'Male',
          value: 'male'
        },
        {
          text: 'Female',
          value: 'female'
        }
      ],
      items: checkedGenders,
      handleChange: function(e) {
        const { checked, value } = e.target;
        const newCheckedGenders = new Map(checkedGenders);
        newCheckedGenders.set(value, checked);
        setCheckedGenders(newCheckedGenders);
      }
    }
  ];
  //     ,
  //     {
  //       question: 'How often would you exercise with your dog?'
  //     },
  //     {
  //       question: "Would you prefer a dog that doesn't shed?"
  //     },
  //     {
  //       question: 'What is your ideal dog size?'
  //     },
  //     {
  //       question: 'What is your ideal dog size?'
  //     }
  //   ];

  const StyledQuizList = styled.div`
    max-width: 700px;
    margin: auto;
  `;

  return (
    <StyledQuizList>
      <h1>Pet Quiz</h1>
      <form onSubmit={onSubmit}>
        {questions.map(q => (
          <QuizQuestion
            type={q.type}
            question={q.question}
            answers={q.answers}
            handleChange={q.handleChange}
            items={q.items}
            key={q.question}
          />
        ))}
        <button>Find Pets</button>
      </form>
    </StyledQuizList>
  );
};

export default withRouter(QuizList);
