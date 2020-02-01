import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GenericContainer } from '../styles/styled-components';

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
    margin: 1rem;
  `;

  return (
    isVisible && (
      <GenericContainer>
        <LoadingText>Loading...</LoadingText>
      </GenericContainer>
    )
  );
};

export default Loading;
