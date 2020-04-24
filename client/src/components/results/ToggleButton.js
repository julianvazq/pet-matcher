import React from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';

const ToggleButton = ({ visibility, changeVisibility }) => {
  const Toggle = styled.div`
    width: 100%;
    border-bottom-right-radius: 0.5rem;
    /* background: hsl(50,45%,82%); */
    /* color: hsl(50,19.6%,37.1%); */
    background: hsl(50, 6%, 36%);
    color: hsl(50, 45.6%, 90.1%);
    box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0.1);
    line-height: 1;

    p {
      font-size: 1.25rem;
      font-weight: 600;
      text-align: center;
      padding: 0.5rem 1rem;
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      vertical-align: middle;
      letter-spacing: 1px;
    }
  `;

  const iconStyles = {
    verticalAlign: 'bottom',
  };

  const conditionalIcon = visibility ? (
    <IoMdArrowDropupCircle style={iconStyles} />
  ) : (
    <IoMdArrowDropdownCircle style={iconStyles} />
  );

  const conditionalText = visibility ? 'Less information' : 'More information';

  return (
    <Toggle onClick={changeVisibility}>
      <p>
        {conditionalIcon} {conditionalText}
      </p>
    </Toggle>
  );
};

export default ToggleButton;
