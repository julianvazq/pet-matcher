import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GenericContainer } from '../styles/styled-components';
import DogRunning from '../../static/dog-running.gif';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(false);
  const delay = 500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return function cleanUp() {
      clearTimeout(timer);
    };
  }, [delay]);

  const LoadingText = styled.div`
    font-size: 1.5rem;
    color: black;
    margin: 1rem;
    font-weight: 600;
  `;

  return (
    isVisible && (
      <GenericContainer>
        <img
          src={DogRunning}
          alt='Loading...'
          style={{ mixBlendMode: 'multiply', margin: '1rem 0  0 1.5rem' }}
        />
        <LoadingText>Loading...</LoadingText>
      </GenericContainer>
    )
  );
};

export default Loading;
