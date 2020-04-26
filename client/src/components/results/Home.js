import React, { useState } from 'react';
import Heading from './Heading';
import SearchContainer from './SearchContainer';
import Results from './Results';
import { PageContainer } from '../styles/styled-components';

const Home = () => {
  const [params, setParams] = useState(null);

  const handleParams = (newParams) => {
    setParams(newParams);
    console.log('1. submitted params');
  };

  return (
    <PageContainer>
      <Heading />
      <SearchContainer handleParams={handleParams} />
      <Results params={params} />
    </PageContainer>
  );
};

export default Home;
