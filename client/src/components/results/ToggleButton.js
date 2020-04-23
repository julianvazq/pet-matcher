import React from 'react';
import styled from 'styled-components';

const ToggleButton = ({ visibility, changeVisibility }) => {
  const Toggle = styled.div`
    width: 100%;
    border-bottom-right-radius: 0.5rem;
    background: hsl(50, 45%, 82%);
    box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0.1);
    line-height: 1;

    p {
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
      padding: 0.5rem 1rem;
      color: hsl(50, 19.6%, 37.1%);
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      vertical-align: middle;
      letter-spacing: 1px;
    }
  `;

  return (
    <Toggle onClick={changeVisibility}>
      <p>{visibility ? 'Less' : 'More'} information</p>
    </Toggle>
  );
};

export default ToggleButton;
