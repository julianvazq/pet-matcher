import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { PetContext } from '../context/PetContext';
import styled from 'styled-components';
import CheckboxQuestion from './CheckboxQuestion';
import RadioQuestion from './RadioQuestion';
import InputQuestion from './InputQuestion';

const QuizList = props => {
  const { setSizes, setAges, setGenders, setZip, setDistance } = useContext(
    PetContext
  );
  const [checkedSizes, setCheckedSizes] = useState(new Map());
  const [checkedAges, setCheckedAges] = useState(new Map());
  const [checkedGenders, setCheckedGenders] = useState(new Map());
  const [zipCode, setZipCode] = useState('');
  const [maxDistance, setMaxDistance] = useState(null);

  const handleZipCode = e => {
    setZipCode(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setSizes(checkedSizes);
    setAges(checkedAges);
    setGenders(checkedGenders);
    setZip(zipCode);
    setDistance(maxDistance);
    // Redirect
    props.history.push('/results');
  };

  const checkboxQuestions = [
    {
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

  const radioQuestions = [
    {
      question: "What's distance you'd travel for a pet?",
      answers: [
        {
          text: 'Less than 5 miles',
          value: '5'
        },
        {
          text: 'Less than 10 miles ',
          value: '10'
        },
        {
          text: 'Less than 25 miles ',
          value: '25'
        },
        {
          text: 'Less than 50 miles ',
          value: '50'
        },
        {
          text: 'Less than 100 miles ',
          value: '100'
        },
        {
          text: "I'd travel any distance",
          value: ''
        }
      ],
      currentValue: maxDistance,
      handleChange: function(e) {
        const { value } = e.target;
        setMaxDistance(value);
      }
    }
  ];

  const StyledQuizList = styled.div`
    max-width: 600px;
    margin: 2rem 1rem;

    @media (min-width: 500px) {
      margin: 2rem auto;
    }
  `;

  const Button = styled.button`
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    color: hsl(255, 32%, 35%);
    background: hsl(255, 32%, 75%);
  `;

  return (
    <StyledQuizList>
      <h1>Pet Matcher</h1>
      <form onSubmit={onSubmit}>
        {checkboxQuestions.map(q => (
          <CheckboxQuestion
            question={q.question}
            answers={q.answers}
            handleChange={q.handleChange}
            items={q.items}
            key={q.question}
          />
        ))}
        {radioQuestions.map(q => (
          <RadioQuestion
            question={q.question}
            answers={q.answers}
            currentValue={maxDistance}
            handleChange={q.handleChange}
            key={q.question}
          />
        ))}
        <InputQuestion value={zipCode} handleChange={handleZipCode} />
        <Button>Find Pets</Button>
      </form>
    </StyledQuizList>
  );
};

export default withRouter(QuizList);
