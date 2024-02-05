"use client";

import { useState } from "react";

const ClientPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-center justify-between w-36">
      <button
        className="btn btn-primary btn-sm text-xl"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <h1 className="text-3xl">{counter}</h1>
      <button
        className="btn btn-primary btn-sm text-xl"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ClientPage;
