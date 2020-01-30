import React, { useState, useEffect } from 'react';

const Input = ({ type, answer, checked = false, handleChange }) => {
  // useEffect(() => {
  //   console.log('rerendering');
  // });

  return (
    <>
      <input
        type={type}
        name={answer.value}
        value={answer.value}
        checked={checked}
        onChange={handleChange}
      />
      {answer.text} <br />
    </>
  );
};

export default Input;
