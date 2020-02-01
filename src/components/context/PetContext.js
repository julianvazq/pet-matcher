import React, { createContext, useState } from 'react';

export const PetContext = createContext();

const PetContextProvider = props => {
  const [sizes, setSizes] = useState(null);
  const [ages, setAges] = useState(null);
  const [genders, setGenders] = useState(null);
  const [zip, setZip] = useState(20850);
  const [distance, setDistance] = useState(25);
  const [token, setToken] = useState(null);

  return (
    <PetContext.Provider
      value={{
        sizes,
        ages,
        genders,
        zip,
        distance,
        token,
        setSizes,
        setAges,
        setGenders,
        setZip,
        setDistance,
        setToken
      }}
    >
      {props.children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;
