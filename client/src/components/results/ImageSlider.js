import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io';

const ImageSlider = ({ photos, type }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = e => {
    // Stop default link behavior
    e.preventDefault();

    if (photos[currentPhoto + 1]) {
      setCurrentPhoto(currentPhoto + 1);
    } else {
      setCurrentPhoto(0);
    }
  };

  const previousPhoto = e => {
    // Stop default link behavior
    e.preventDefault();

    if (photos[currentPhoto - 1]) {
      setCurrentPhoto(currentPhoto - 1);
    } else {
      setCurrentPhoto(photos.length - 1);
    }
  };

  const Image = styled.img`
    object-fit: cover;
    object-position: ${type === 'details' && 'center'};
    border-radius: ${type === 'details' && '0.5rem'};
    display: block;
    width: 100%;
    height: ${type === 'details' ? '400px' : '275px'};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    @media (min-width: 800px) {
      height: ${type === 'details' && 'auto'};
      object-fit: ${type === 'details' && 'initial'};
      max-width: ${type === 'details' && '370px'};
    }
  `;

  const PreviousArrow = styled(IoIosArrowDropleftCircle)`
    cursor: pointer;
    color: hsla(50, 50%, 89%, 0.7);
    font-size: 4.5rem;
    padding: 0.5rem;
    position: absolute;
    top: 0%;
    left: 0%;
  `;

  const NextArrow = styled(IoIosArrowDroprightCircle)`
    cursor: pointer;
    color: hsla(50, 50%, 89%, 0.7);
    font-size: 4.5rem;
    padding: 0.5rem;
    position: absolute;
    top: 0%;
    right: 0%;
  `;

  return (
    <>
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
    </>
  );
};

export default ImageSlider;
