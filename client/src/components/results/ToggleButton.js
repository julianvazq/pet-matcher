import React from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';

const Toggle = styled.div`
  width: 100%;
  border-bottom-right-radius: 0.5rem;
  background: hsl(50, 6%, 36%);
  color: hsl(50, 45.6%, 90.1%);
  box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0.1);
  line-height: 1;
  position: relative;

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

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: inset 0px 0px 2px 1px hsla(50, 34%, 20%, 0.3);
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: inset 0 -1px 0 hsla(50, 6%, 40%, 0.7);
    z-index: -1;
  }
`;

const ToggleButton = ({ visibility, changeVisibility }) => {
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
