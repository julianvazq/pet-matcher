import React, { useState, useEffect } from 'react';
import Alert from '../Alert';
import Loading from '../Loading';
import PetGrid from './PetGrid';

const Results = ({ params }) => {
  const [pets, setPets] = useState([]);
  const [status, setStatus] = useState('success');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (params) {
      fetchPets(currentPage);
    }
  }, [params]);

  useEffect(() => {
    if (params) {
      fetchNextPage(currentPage);
    }
  }, [currentPage]);

  const removeDuplicates = (firstArray, secondArray) => {
    const combinedArrays = [...firstArray, ...secondArray];
    const uniquePets = combinedArrays.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );
    return uniquePets;
  };

  const fetchNextPage = async (page) => {
    setLoadingMore(true);

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(params),
      };
      const resPets = await fetch(`/pets/${page}`, options);
      const petsFinal = await resPets.json();

      const uniquePets = removeDuplicates(pets, petsFinal.animals);
      setPets(uniquePets);

      setLoadingMore(false);
    } catch (e) {
      setLoadingMore(false);
      setStatus('error');
      console.log('Oh no, something went wrong', e);
    }
  };

  const fetchPets = async (page) => {
    setStatus('loading');
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(params),
      };
      const resPets = await fetch(`/pets/${page}`, options);

      // Checks if response is ok (200)
      if (!resPets.ok) {
        setStatus('error');
        return;
      }

      const petsFinal = await resPets.json();

      if (petsFinal.title === 'Invalid Request') {
        setStatus('error-location');
        return;
      }

      setTotalResults(petsFinal.pagination.total_count);
      setTotalPages(petsFinal.pagination.total_pages);
      setPets(petsFinal.animals);
      setStatus('success');
    } catch (e) {
      setStatus('error');
      console.log('Oh no, something went wrong', e);
    }
  };

  const displayPets = () => {
    if (pets.length) {
      return (
        <PetGrid
          pets={pets}
          totalResults={totalResults}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loadingMore={loadingMore}
        />
      );
    } else {
      return (
        <Alert
          message='Sorry, no pets found.'
          action='Want to try a different search?'
        />
      );
    }
  };

  if (status === 'success') {
    if (!params) {
      return (
        <Alert
          message='Find pets in your area!'
          action='Enter search input above.'
        />
      );
    }

    return displayPets();
  }

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return (
      <Alert
        message='Oh no, something went wrong.'
        action='Please try again.'
      />
    );
  }

  if (status === 'error-location') {
    return (
      <Alert
        message='Sorry, could not determine location.'
        action='Please try again.'
      />
    );
  }
};

export default Results;
