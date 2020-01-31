import React, { createContext, useState } from 'react';

export const PetContext = createContext();

const PetContextProvider = props => {
  const [sizes, setSizes] = useState(null);
  const [ages, setAges] = useState(null);
  const [genders, setGenders] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <PetContext.Provider
      value={{
        sizes,
        ages,
        genders,
        token,
        setSizes,
        setAges,
        setGenders,
        setToken
      }}
    >
      {props.children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;
