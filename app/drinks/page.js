import DrinksList from "@/components/DrinksList";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchData = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch drinks...");
  }
  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  //we can fetch data directly
  // const response = await fetch(url);
  // if (!response.ok) {
  //   throw new Error("Failed to fetch drinks...");
  // }
  // const data = await response.json();

  //or use function we created above
  const data = await fetchData();

  //when data is loading use loading file
  //for errors use error file
  // both in drinks folder

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
