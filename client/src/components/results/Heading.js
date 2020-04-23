import React from 'react';
import styled from 'styled-components';

const Heading = () => {
  const HeadingContainer = styled.div`
    margin: 0 1rem;

    @media (min-width: 600px) {
      margin: 0;
    }
  `;

  const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 0.5rem;
  `;

  const Subtitle = styled.h2`
    font-weight: 600;
    position: relative;
    padding-bottom: 1rem;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: hsla(50, 34%, 15%, 0.2);
    }
  `;
  return (
    <div>
      <HeadingContainer>
        <Title>Results</Title>
        <Subtitle>Click on a pet to learn more!</Subtitle>
      </HeadingContainer>
    </div>
  );
};

export default Heading;
