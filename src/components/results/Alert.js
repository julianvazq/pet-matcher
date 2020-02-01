import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SecondaryButton } from '../styles/styled-components';

const Alert = ({ message, action, buttonText }) => {
  const MessageContainer = styled.div`
    background: hsl(50, 50%, 89%);
    border-radius: 0.5rem;
    margin: 2rem 0;
    padding: 1rem;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
      0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
      0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
      0 100px 80px rgba(0, 0, 0, 0.02);
  `;

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
    <MessageContainer>
      <PrimaryMessage>{message}</PrimaryMessage>
      <Action>{action}</Action>
      <SecondaryButton as={Link} to='/'>
        {buttonText}
      </SecondaryButton>
    </MessageContainer>
  );
};

export default Alert;
