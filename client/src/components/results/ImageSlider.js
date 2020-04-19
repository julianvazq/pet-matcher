import React, { useState } from 'react';
import styled from 'styled-components';

const ImageSlider = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const Image = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 250px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  `;

  return (
    <picture>
      <source srcSet={photos[currentImage].large} media='(min-width: 1100px)' />
      <Image src={photos[currentImage].medium} alt='Dog Image.' />
    </picture>
  );
};

export default ImageSlider;
