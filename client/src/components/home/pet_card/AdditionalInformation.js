import React from 'react';
import styled from 'styled-components';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  color: hsl(55, 15%, 39%);
  font-weight: 600;
  max-width: max-content;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
    color: hsl(50, 0%, 35%);
  }

  p {
    font-size: 1rem;
    color: hsl(50, 12%, 22%);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const CheckboxIcon = styled(IoIosCheckmarkCircle)`
  font-size: 1.5rem;
  color: #4d6e4d;
`;

const CloseIcon = styled(IoIosCloseCircle)`
  font-size: 1.5rem;
  color: #b64848;
`;

const DynamicDiv = styled.div`
  display: ${(props) => (props.visibility ? 'block' : 'none')};
  border-top: ${(props) =>
    !props.expandCard && '1.5px solid hsla(50, 34%, 15%, 0.2)'};
  padding-top: ${(props) => (props.expandCard ? '0' : '0.75rem')};
  position: relative;

  &:before {
    content: '';
    height: 100%;
    width: 1.5px;
    background: hsla(50, 34%, 15%, 0.2);
    position: absolute;
    left: -40px;
    top: -14%;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: grid;

  @media (min-width: 375px) {
    grid-column-gap: ${(props) => (props.expandCard ? '3rem' : '1rem')};
    grid-template-columns: ${(props) =>
      props.expandCard ? '' : 'repeat(2, 1fr)'};
    /* grid-template-rows: ${(props) =>
      props.expandCard ? 'repeat(3, auto)' : ''};
    grid-auto-flow: ${(props) => (props.expandCard ? 'column' : '')}; */
    grid-template-columns: ${(props) =>
      props.expandCard ? 'repeat(3, auto)' : ''};
  }
`;

const AdditionalInformation = ({ petInfo, visibility, expandCard }) => {
  return (
    <DynamicDiv expandCard={expandCard} visibility={visibility ? 1 : 0}>
      <List expandCard={expandCard}>
        {petInfo.coat && (
          <ListItem>
            <h2>Coat</h2>
            <p>{petInfo.coat}</p>
          </ListItem>
        )}
        <ListItem>
          <h2>Mixed</h2>
          {petInfo.breeds.mixed ? <CheckboxIcon /> : <CloseIcon />}
        </ListItem>
        <ListItem>
          <h2>Spayed/Neutered</h2>
          {petInfo.attributes.spayed_neutered ? (
            <CheckboxIcon />
          ) : (
            <CloseIcon />
          )}
        </ListItem>
        <ListItem>
          <h2>House Trained</h2>
          {petInfo.attributes.house_trained ? <CheckboxIcon /> : <CloseIcon />}
        </ListItem>
        <ListItem>
          <h2>Special Needs</h2>
          {petInfo.attributes.special_needs ? <CheckboxIcon /> : <CloseIcon />}
        </ListItem>
        <ListItem>
          <h2>Shots Up To Date</h2>
          {petInfo.attributes.shots_current ? <CheckboxIcon /> : <CloseIcon />}
        </ListItem>
        {petInfo.environment.cats ||
        petInfo.environment.dogs ||
        petInfo.environment.children ? (
          <ListItem style={{ gridColumn: 'span 2' }}>
            <h2>Good With</h2>
            {petInfo.environment.dogs && <p>• Other dogs</p>}
            {petInfo.environment.children && <p>• Children</p>}
            {petInfo.environment.cats && <p>• Cats</p>}
          </ListItem>
        ) : null}
      </List>
    </DynamicDiv>
  );
};

export default AdditionalInformation;
