import styled from 'styled-components';

export const QuestionContainer = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: hsl(220, 34%, 75%);
  border-radius: 0.5rem;
  position: relative;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: inset 0px 1px 3px 0px hsla(220, 34%, 25%, 0.2);
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
    box-shadow: inset 0 -2px 0 hsla(220, 50%, 90%, 0.7);
    z-index: -1;
  }
`;

export const Label = styled.label`
  display: block;
  position: relative;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  height: 30px;
  width: 150px;
  border-radius: 0.2rem;
  border: none;
  padding: 0 0.5rem;
  font-size: 1.25rem;
`;
