import React from 'react';
import styled from 'styled-components';

const AdditionalInformation = ({ visibility }) => {
  const DynamicDiv = styled.div`
    display: ${visibility ? 'block' : 'none'};
  `;

  const ListItem = styled.li`
    display: flex;
    margin-bottom: 0.5rem;
    color: hsl(55, 15%, 43%);

    h2 {
      font-size: 1.125rem;
      font-weight: 400;
    }

    p {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${(props) =>
        !props.gender
          ? 'hsl(50,50%,30%)'
          : props.gender === 'Male'
          ? '#5285a9'
          : '#e34460'};
      max-width: 15ch;
      margin-left: 1rem;
    }
  `;

  return (
    <DynamicDiv>
      <ListItem>
        <h2>Age</h2>
      </ListItem>
      <ListItem>
        <h2>Size</h2>
      </ListItem>
      <ListItem>
        <h2>Age</h2>
      </ListItem>
      <ListItem>
        <h2>Size</h2>
      </ListItem>
      <ListItem>
        <h2>Age</h2>
      </ListItem>
      <ListItem>
        <h2>Size</h2>
      </ListItem>
    </DynamicDiv>
  );
};

export default AdditionalInformation;
