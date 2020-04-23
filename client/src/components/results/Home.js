import React, { useState } from 'react';
import Heading from './Heading';
import SearchContainer from './SearchContainer';
import Results from './Results';
import { PageContainer } from '../styles/styled-components';

const Home = () => {
  const [params, setParams] = useState(null);

  return (
    <PageContainer>
      <Heading />
      <SearchContainer setParams={setParams} />
      <Results params={params} />
    </PageContainer>
  );
};

export default Home;
