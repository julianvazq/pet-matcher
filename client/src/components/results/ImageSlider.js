import React, { useState } from 'react';
import styled from 'styled-components';

const ImageSlider = ({ photos }) => {
  const [currentSrc, setCurrentSrc] = useState(photos[0].medium);

  const Image = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 250px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  `;

  return <Image src={currentSrc} />;
};

export default ImageSlider;
