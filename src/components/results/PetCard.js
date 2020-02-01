import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PetCard = ({ petInfo }) => {
  const getImg = () => {
    const img = petInfo?.photos[0]?.medium;
    return img;
  };

  const getBreeds = () => {
    let breeds = petInfo.breeds.primary || null;
    if (petInfo.breeds.secondary) {
      breeds += `, ${petInfo.breeds.secondary}`;
    }
    return breeds;
  };

  const FlexCard = styled.div`
    display: flex;
    background: hsl(220, 34%, 75%);
    border-radius: 0.5rem;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
      0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
      0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
      0 100px 80px rgba(0, 0, 0, 0.02);
  `;

  const ImgContainer = styled.div`
    flex: 0 1 200px;
  `;

  const PetInfoContainer = styled.div`
    flex: 1 1 0;
    padding: 0.125rem 1rem;
    position: relative;

    h1 {
      font-size: 1.75rem;
      line-height: 1.125;
      padding: 0.25rem 0;
    }

    h2 {
      font-size: 1.125rem;
      font-weight: 600;
      color: hsl(220, 34%, 50%);
      margin-bottom: 0.5rem;
      line-height: 1.125;
    }
  `;

  const Age = styled.p`
    font-size: 1.125rem;
    color: hsl(220.2, 70.5%, 25.3%);
    margin-bottom: 0.25rem;
  `;

  const GenericInfo = styled.p`
    color: hsl(220.8, 21.7%, 22.5%);
    margin-bottom: 0.125rem;
  `;

  const Miles = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom-right-radius: 0.5rem;
    background: hsl(220.8, 45%, 73%);
    box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0.1);
    line-height: 1;

    p {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 0.5rem 1rem;
      color: hsl(218.9, 19.6%, 37.1%);
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      vertical-align: middle;
      letter-spacing: 1px;
    }
  `;

  console.log(petInfo);

  return (
    // <Link to={`/results/${petInfo.id}`}>
    <FlexCard>
      <ImgContainer>
        <img
          src={getImg()}
          alt={petInfo.type}
          style={{
            objectFit: 'cover',
            display: 'block',
            width: '100%',
            height: '250px',
            borderTopLeftRadius: '0.5rem',
            borderBottomLeftRadius: '0.5rem'
          }}
        />
      </ImgContainer>
      <PetInfoContainer>
        <h1>
          {/* Lowercase + Capitalize Names */}
          {petInfo.name.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
        </h1>
        <h2>{getBreeds()}</h2>
        <Age>{petInfo.age}</Age>
        <GenericInfo>{petInfo.gender}</GenericInfo>
        <GenericInfo>{petInfo.size}</GenericInfo>
        <Miles>
          <p>
            {petInfo.distance.toFixed(2)} <span>miles</span>
          </p>
        </Miles>
      </PetInfoContainer>
    </FlexCard>
    // </Link>
  );
};

export default PetCard;
