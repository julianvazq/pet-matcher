import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { FaCarAlt } from 'react-icons/fa';
import AdditionalInformation from './AdditionalInformation';
import ToggleButton from './ToggleButton';

const PetInformation = ({
  petInfo,
  desktopView,
  expandCard,
  handleExpandCard,
}) => {
  const [visibility, setVisibility] = useState(false);

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  const getBreeds = () => {
    let breeds = petInfo.breeds.primary || null;
    if (petInfo.breeds.secondary) {
      breeds += `, ${petInfo.breeds.secondary}`;
    }

    if (window.width >= 700) {
      breeds = breeds.length > 35 ? `${breeds.substring(0, 35)}...` : breeds;
    }

    return breeds;
  };

  const formatName = (name) => {
    /* Lowercase and then capitalize name */
    let formattedName = name
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase());
    // formattedName =
    //   formattedName.length > 16
    //     ? `${formattedName.substring(0, 16)}...`
    //     : formattedName;

    return formattedName;
  };

  const OuterContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

  const PetInfoContainer = styled.div`
    flex: 1 1 0;
    padding: 0.125rem ${expandCard ? '2rem' : '1rem'};
    /* display: ${expandCard ? 'flex' : ''}; */
    display: ${expandCard && 'grid'};
    grid-template-columns: ${expandCard && '30% auto'};
    grid-column-gap: 3rem;
  `;

  const Name = styled.h1`
    font-size: 1.5rem;
    line-height: 1.125;
    padding: 0.25rem 0 0.5rem 0;
    padding-bottom: ${expandCard && '0'};
    grid-column: 1/2;
    align-self: center;
  `;

  const Miles = styled.p`
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    background: hsl(50, 40%, 75%);
    color: hsl(50, 50%, 35%);
    padding: 0.25rem 0.5rem;
    border-radius: 30px;
    margin-left: ${expandCard ? '0' : '0.25rem'};
    margin: ${expandCard && '0 0 0.75rem 0'};

    span {
      font-weight: 600;
    }
  `;

  const Breed = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    color: hsl(55, 13%, 37%);
    margin-bottom: ${expandCard ? '1rem' : '0.5rem'};
    line-height: 1.125;
  `;

  const Subtitle = styled.h2`
    font-size: 1.25rem;
    display: ${expandCard ? 'block' : visibility ? 'block' : 'none'};
    grid-row: 1;
    grid-column: 2/3;
    align-self: center;
  `;

  const ListItem = styled.li`
    display: flex;
    margin-bottom: 0.5rem;
    color: hsl(55, 15%, 43%);

    h2 {
      font-size: 1rem;
      font-weight: 400;
    }

    p {
      font-size: 1.125rem;
      font-weight: 500;
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

  // console.log(petInfo);

  return (
    <OuterContainer>
      <PetInfoContainer>
        <Name>
          {formatName(petInfo.name)}
          {!expandCard && (
            <Miles>
              <FaCarAlt
                style={{
                  transform: 'translateY(2px)',
                  fontSize: '0.9rem',
                  marginRight: '5px',
                }}
              />
              {petInfo.distance.toFixed(2)} <span>miles</span>
            </Miles>
          )}
        </Name>
        <div style={{ gridRow: 2 }}>
          {expandCard && (
            <Miles>
              <FaCarAlt
                style={{
                  transform: 'translateY(2px)',
                  fontSize: '0.9rem',
                  marginRight: '5px',
                }}
              />
              {petInfo.distance.toFixed(2)} <span>miles</span>
            </Miles>
          )}
          <Breed>{getBreeds()}</Breed>
          <ListItem>
            <h2>Age</h2>
            <p>{petInfo.age}</p>
          </ListItem>
          <ListItem>
            <h2>Size</h2>
            <p>{petInfo.size}</p>
          </ListItem>
          <ListItem gender={petInfo.gender}>
            <h2>Gender</h2>
            <p>
              {petInfo.gender === 'Male' ? (
                <IoMdMale style={{ transform: 'translateY(2px)' }} />
              ) : (
                <IoMdFemale style={{ verticalAlign: 'middle' }} />
              )}{' '}
              {petInfo.gender}
            </p>
          </ListItem>
        </div>
        <Subtitle>Details</Subtitle>
        <AdditionalInformation
          petInfo={petInfo}
          visibility={expandCard ? expandCard : visibility}
          expandCard={expandCard}
          style={{ gridRow: 2 }}
        />
      </PetInfoContainer>
      <ToggleButton
        visibility={expandCard ? expandCard : visibility}
        changeVisibility={
          handleExpandCard ? handleExpandCard : changeVisibility
        }
      />
    </OuterContainer>
  );
};

export default PetInformation;
