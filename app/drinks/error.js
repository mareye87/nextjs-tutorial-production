"use client";

//error and its message comes from the error thrown in drinksPage

const error = (error) => {
  return <h1>{error.error.message}</h1>;
};

export default error;
