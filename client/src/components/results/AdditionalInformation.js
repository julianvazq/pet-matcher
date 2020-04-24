import React from 'react';
import styled from 'styled-components';

const AdditionalInformation = ({ petInfo, visibility }) => {
  const DynamicDiv = styled.div`
    display: ${visibility ? 'block' : 'none'};
    border-top: 1.5px solid hsla(50, 34%, 15%, 0.2);
    padding-top: 0.5rem;
  `;

  const List = styled.ul`
    list-style-type: none;
    display: grid;

    @media (min-width: 375px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }
  `;

  const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: hsl(55, 15%, 43%);

    h2 {
      font-size: 1rem;
      font-weight: 400;
    }

    p {
      font-size: 1.25rem;
      color: hsl(50, 12%, 22%);
      max-width: 15ch;
    }
  `;

  return (
    <DynamicDiv>
      <List>
        <ListItem>
          <h2>Mixed</h2>
          {petInfo.breeds.mixed ? <p>Yes</p> : <p>No</p>}
        </ListItem>
        {petInfo.coat && (
          <ListItem>
            <h2>Coat</h2>
            <p>{petInfo.coat}</p>
          </ListItem>
        )}
        <ListItem>
          <h2>House Trained</h2>
          {petInfo.attributes.house_trained ? <p>Yes</p> : <p>No</p>}
        </ListItem>
        <ListItem>
          <h2>Spayed or Neutered</h2>
          {petInfo.attributes.spayed_neutered ? <p>Yes</p> : <p>No</p>}
        </ListItem>
        <ListItem>
          <h2>Special Needs</h2>
          {petInfo.attributes.special_needs ? <p>Yes</p> : <p>No</p>}
        </ListItem>
        <ListItem>
          <h2>Shots Up To Date</h2>
          {petInfo.attributes.shots_current ? <p>Yes</p> : <p>No</p>}
        </ListItem>
        {petInfo.environment.cats ||
        petInfo.environment.dogs ||
        petInfo.environment.children ? (
          <ListItem>
            <h2>Good With</h2>
            {petInfo.environment.dogs && <p>Other dogs</p>}
            {petInfo.environment.children && <p>Children</p>}
            {petInfo.environment.cats && <p>Cats</p>}
          </ListItem>
        ) : null}
      </List>
    </DynamicDiv>
  );
};

export default AdditionalInformation;
