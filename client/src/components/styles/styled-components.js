import styled, { keyframes } from 'styled-components';

export const PageContainer = styled.section`
  max-width: 1200px;
  min-height: 200px;
  margin: 2rem 0.5rem;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.main ? 'hsla(57, 50%, 95%, 1)' : 'hsla(57, 50%, 95%, 0.9)'};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
    0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
    0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
    0 100px 80px rgba(0, 0, 0, 0.02);

  @media (min-width: 600px) {
    padding: 2rem;
    margin: 2rem 1rem;
  }

  @media (min-width: 1200px) {
    margin: 2rem auto;
  }
`;

export const GenericContainer = styled.div`
  background: hsla(50, 50%, 89%, 0.9);
  border-radius: 0.5rem;
  /* margin: 1rem 0; */
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
  margin-bottom: 0.5rem;
`;

export const Validation = styled.p`
  color: #cc0000;
`;

export const fadeIn = keyframes`
        0% { 
            opacity: 0; 
        }
        100% { 
            opacity: 1; 
        } 
`;
