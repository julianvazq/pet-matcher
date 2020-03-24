import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { PetContext } from '../context/PetContext';
import styled from 'styled-components';
import { PrimaryButton } from '../styles/styled-components';
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
  const [validation, setValidation] = useState(
    new Map([
      ['sizes', true],
      ['ages', true],
      ['genders', true],
      ['zip', true],
      ['distance', true]
    ])
  );

  const performValidation = () => {
    validateMap(checkedSizes)
      ? validation.set('sizes', true)
      : validation.set('sizes', false);

    validateMap(checkedAges)
      ? validation.set('ages', true)
      : validation.set('ages', false);

    validateMap(checkedGenders)
      ? validation.set('genders', true)
      : validation.set('genders', false);

    maxDistance
      ? validation.set('distance', true)
      : validation.set('distance', false);

    validateZip() ? validation.set('zip', true) : validation.set('zip', false);

    let readyToSubmit = true;
    validation.forEach((value, key) => {
      if (!value) {
        readyToSubmit = false;
      }
    });

    return readyToSubmit;
  };

  const validateMap = map => {
    let foundInput = false;
    map.forEach((value, key) => {
      if (value) {
        foundInput = true;
      }
    });
    return foundInput;
  };

  const validateZip = () => {
    let validZip = false;
    if (zipCode && zipCode.length === 5) {
      validZip = true;
    }
    return validZip;
  };

  const onSubmit = e => {
    e.preventDefault();
    setSizes(checkedSizes);
    setAges(checkedAges);
    setGenders(checkedGenders);
    setZip(zipCode);
    setDistance(maxDistance);

    // Validate and Redirect
    performValidation() && props.history.push('/results');
  };

  const checkboxQuestions = [
    {
      question: 'Select your ideal dog size(s)',
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
      validation: validation.get('sizes'),
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
      validation: validation.get('ages'),
      handleChange: function(e) {
        const { checked, value } = e.target;
        const newCheckedAges = new Map(checkedAges);
        newCheckedAges.set(value, checked);
        setCheckedAges(newCheckedAges);
      }
    },
    {
      question: 'Select your preferred gender(s)',
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
      validation: validation.get('genders'),
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
      question: 'How far would you travel for a pet?',
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
          value: '500'
        }
      ],
      currentValue: maxDistance,
      validation: validation.get('distance'),
      handleChange: function(e) {
        const { value } = e.target;
        setMaxDistance(value);
      }
    }
  ];

  const textInputQuestions = [
    {
      question: 'Zip Code',
      value: zipCode,
      validation: validation.get('zip'),
      validationMessage: 'Please enter a 5-digit US zip code.',
      handleChange: function(e) {
        const { value } = e.target;
        setZipCode(value);
      }
    }
  ];

  const StyledQuizList = styled.section`
    max-width: 600px;
    margin: 2rem 1rem;
    padding: 2rem;
    border-radius: 0.5rem;
    background: hsl(57, 50%, 95%);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
      0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
      0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
      0 100px 80px rgba(0, 0, 0, 0.02);

    h1 {
      position: relative;
      padding-bottom: 1rem;
    }

    h1:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: hsla(50, 34%, 15%, 0.2);
    }

    @media (min-width: 500px) {
      margin: 2rem auto;
    }
  `;

  // <a href="https://www.vecteezy.com/free-vector/id-card-background">Id Card Background Vectors by Vecteezy</a>

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
            validation={q.validation}
          />
        ))}
        {radioQuestions.map(q => (
          <RadioQuestion
            question={q.question}
            answers={q.answers}
            currentValue={maxDistance}
            handleChange={q.handleChange}
            key={q.question}
            validation={q.validation}
          />
        ))}
        {textInputQuestions.map(q => (
          <InputQuestion
            question={q.question}
            value={q.value}
            handleChange={q.handleChange}
            key={q.question}
            validation={q.validation}
            s
            validationMessage={q.validationMessage}
          />
        ))}
        <PrimaryButton>Find Pets</PrimaryButton>
      </form>
    </StyledQuizList>
  );
};

export default withRouter(QuizList);