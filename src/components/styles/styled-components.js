import styled from 'styled-components';

export const GenericContainer = styled.div`
  background: hsl(50, 50%, 89%);
  border-radius: 0.5rem;
  margin: 2rem 0;
  padding: 1rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
    0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
    0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
    0 100px 80px rgba(0, 0, 0, 0.02);
`;

export const QuestionContainer = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: hsl(50, 50%, 89%);
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
    box-shadow: inset 0px 0px 3px 1.5px hsla(50, 34%, 15%, 0.2);
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
    box-shadow: inset 0 -3px 0 hsla(50, 38%, 88%, 0.7);
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

  &:focus {
    border-color: hsla(50, 38%, 88%, 0.7);
  }
`;

export const PrimaryButton = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: inherit;
  background: hsl(0, 0%, 79%);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07);
  display: inline-block;
`;

export const SecondaryButton = styled(PrimaryButton)`
  font-size: 1.25rem;
`;
