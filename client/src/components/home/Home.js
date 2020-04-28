import React, { useState } from 'react';
import Heading from './Heading';
import SearchContainer from './search/SearchContainer';
import Results from './Results';
import { PageContainer } from '../styles/styled-components';

const Home = () => {
  const [params, setParams] = useState(null);

  console.log('params: ', params);
  const handleParams = (newParams) => {
    setParams(newParams);
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