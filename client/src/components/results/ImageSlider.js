import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

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

  const fadeIn = keyframes`
        0% { 
            opacity: 0; 
        }
        100% { 
            opacity: 1; 
        } 
`;

  const Image = styled.img`
    /* animation: ${fadeIn} 250ms ease-in; */
    object-fit: cover;
    object-position: 50% 35%;
    object-position: center;
    display: block;
    width: ${expandCard ? '300px' : '100%'};
    height: ${expandCard ? '300px' : '275px'};
    border-radius: 0.5rem;
    border-top-right-radius: ${expandCard ? '0' : '0.5rem'};
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
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: ${!expandCard &&
    'inset 0px -10px 18px -19px hsla(50, 50%, 10%, 0.8)'};
  `;

  const PreviousArrow = styled(IoIosArrowDropleftCircle)`
    cursor: pointer;
    color: hsla(50, 50%, 89%, 0.7);
    font-size: 4rem;
    padding: 0.5rem;
    position: absolute;
    top: 0%;
    left: 0%;
  `;

  const NextArrow = styled(IoIosArrowDroprightCircle)`
    cursor: pointer;
    color: hsla(50, 50%, 89%, 0.7);
    font-size: 4rem;
    padding: 0.5rem;
    position: absolute;
    top: 0%;
    right: 0%;
  `;

  return (
    <ImgContainer>
      <AdoptButton href={url} target='_blank'>
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
        <Image src={photos[currentPhoto].medium} alt='Dog Image.' />
      </picture>
    </ImgContainer>
  );
};

export default ImageSlider;
