import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SecondaryButton, GenericContainer } from '../styles/styled-components';

const Alert = ({ message, action, buttonText }) => {
  const PrimaryMessage = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 1rem;
  `;

  const Action = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  `;

  return (
    <GenericContainer>
      <PrimaryMessage>{message}</PrimaryMessage>
      <Action>{action}</Action>
      <SecondaryButton as={Link} to='/'>
        {buttonText}
      </SecondaryButton>
    </GenericContainer>
  );
};

export default Alert;
