import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../styles/styled-components';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

const Image = styled.img`
  animation: ${fadeIn} 250ms ease-in;
  object-fit: cover;
  object-position: 50% 35%;
  object-position: center;
  display: block;
  width: ${(props) => (props.expandCard ? '300px' : '100%')};
  height: ${(props) => (props.expandCard ? '300px' : '275px')};
  border-radius: 0.5rem;
  border-top-right-radius: ${(props) => (props.expandCard ? '0' : '0.5rem')};
  border-bottom-right-radius: 0;
`;

const ImgContainer = styled.div`
  animation: ${fadeIn} 250ms ease-in;
  flex: 0 1 200px;
  background: rgba(0, 0, 0, 0);
  position: relative;
`;

const AdoptButton = styled.a`
  display: inline-block;
  font-weight: 600;
  padding: 0.5rem 1rem;
  color: hsl(50, 40%, 20%);
  background: hsl(50, 40%, 75%);
  border-top-right-radius: 0.5rem;
  opacity: 1;
  transition: opacity 250ms ease-in;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: ${(props) =>
    !props.expandCard && 'inset 0px -10px 18px -19px hsla(50, 50%, 10%, 0.8)'};

  &:hover {
    opacity: 0.9;
  }
`;

const PreviousArrow = styled(IoIosArrowDropleftCircle)`
  cursor: pointer;
  color: hsla(50, 50%, 89%, 0.7);
  font-size: 4rem;
  padding: 0.5rem;
  transform: scale(1);
  transition: transform 250ms ease-in;
  position: absolute;
  top: 0%;
  left: 0%;

  &:hover {
    transform: scale(1.1);
  }
`;

const NextArrow = styled(IoIosArrowDroprightCircle)`
  cursor: pointer;
  color: hsla(50, 50%, 89%, 0.7);
  font-size: 4rem;
  padding: 0.5rem;
  transform: scale(1);
  transition: transform 250ms ease-in;
  position: absolute;
  top: 0%;
  right: 0%;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageSlider = ({ photos, url, expandCard }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = (e) => {
    e.stopPropagation();

    if (photos[currentPhoto + 1]) {
      setCurrentPhoto(currentPhoto + 1);
    } else {
      setCurrentPhoto(0);
    }
  };

  const previousPhoto = (e) => {
    e.stopPropagation();
    if (photos[currentPhoto - 1]) {
      setCurrentPhoto(currentPhoto - 1);
    } else {
      setCurrentPhoto(photos.length - 1);
    }
  };

  return (
    <ImgContainer>
      <AdoptButton href={url} target='_blank' expandCard={expandCard}>
        Adopt Me
      </AdoptButton>
      {photos[1] && (
        <>
          <PreviousArrow onClick={previousPhoto}>{'<'}</PreviousArrow>
          <NextArrow onClick={nextPhoto}>{'>'}</NextArrow>
        </>
      )}
      <picture>
        <source
          srcSet={photos[currentPhoto].large}
          media='(min-width: 1100px)'
        />
        <Image
          src={photos[currentPhoto].medium}
          alt='Dog Image.'
          expandCard={expandCard}
        />
      </picture>
    </ImgContainer>
  );
};

export default ImageSlider;
