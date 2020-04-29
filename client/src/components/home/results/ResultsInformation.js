import React from 'react';
import styled from 'styled-components';

const ResultsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 375px) {
    flex-direction: row;
  }
`;

const ResultsInfo = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 45%);

  span {
    font-weight: 700;
    color: hsl(50, 12%, 22%);
  }
`;

const ResultsInformation = ({ showing, total }) => {
  return (
    <ResultsInfoContainer>
      <ResultsInfo>
        Showing: <span>{showing}</span>
      </ResultsInfo>
      <ResultsInfo>
        Total results: <span>{total}</span>
      </ResultsInfo>
    </ResultsInfoContainer>
  );
};

export default ResultsInformation;
