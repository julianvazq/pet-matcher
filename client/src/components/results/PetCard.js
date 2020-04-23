import React, { useState } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import AdditionalInformation from './AdditionalInformation';

const PetCard = ({ petInfo }) => {
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
    // const formattedBreeds =
    //   breeds.length > 30 ? `${breeds.substring(0, 30)}...` : breeds;

    return breeds;
  };

  const formatName = (name) => {
    /* Lowercase and then capitalize name */
    let formattedName = name
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase());
    formattedName =
      formattedName.length > 13
        ? `${formattedName.substring(0, 13)}...`
        : formattedName;

    return formattedName;
  };

  const FlexCard = styled.article`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: hsl(50, 50%, 89%);
    border-radius: 0.5rem;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
      0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
      0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
      0 100px 80px rgba(0, 0, 0, 0.02);
  `;

  const ImgContainer = styled.div`
    flex: 0 1 200px;
    background: rgba(0, 0, 0, 0);
    position: relative;
  `;

  const PetInfoContainer = styled.div`
    flex: 1 1 0;
    padding: 0.125rem 1rem;

    h1 {
      font-size: 1.75rem;
      line-height: 1.125;
      padding: 0.25rem 0;
    }
  `;

  const Breed = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    color: hsl(55, 13%, 37%);
    margin-bottom: 0.5rem;
    line-height: 1.125;
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

  const Miles = styled.div`
    width: 100%;
    border-bottom-right-radius: 0.5rem;
    background: hsl(50, 45%, 82%);
    box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0.1);
    line-height: 1;

    p {
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
      padding: 0.5rem 1rem;
      color: hsl(50, 19.6%, 37.1%);
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      vertical-align: middle;
      letter-spacing: 1px;
    }
  `;

  return (
    <FlexCard onClick={changeVisibility}>
      <ImgContainer>
        <ImageSlider photos={petInfo.photos} type='card' />
      </ImgContainer>
      <PetInfoContainer>
        <h1>{formatName(petInfo.name)}</h1>
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
        <AdditionalInformation visibility={visibility} />
      </PetInfoContainer>
      <Miles>
        <p>
          {petInfo.distance.toFixed(2)} <span>miles</span>
        </p>
      </Miles>
    </FlexCard>
  );
};

export default PetCard;
