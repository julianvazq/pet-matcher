import React, { useState, useEffect, useRef } from 'react';
import Heading from './Heading';
import SearchContainer from './search/SearchContainer';
import Results from './results/Results';
import { PageContainer } from '../styles/styled-components';

const Home = () => {
  const resultsRef = useRef();
  const [params, setParams] = useState(null);

  const handleParams = (newParams) => {
    setParams(newParams);
  };

  useEffect(() => {
    resultsRef.current.scrollIntoView();
  }, [params]);

  return (
    <>
      <PageContainer main={true}>
        <Heading />
        <SearchContainer handleParams={handleParams} />
      </PageContainer>
      <PageContainer ref={resultsRef}>
        <Results params={params} />
      </PageContainer>
    </>
  );
};

export default Home;
