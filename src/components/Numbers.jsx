// src/Numbers.js
import React from "react";
import { useRifa } from "../context/RifaContext";

function Numbers() {
  const { selectedNumbers } = useRifa();
  const numbers = Array.from({ length: 100 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  return (
    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 py-4 max-w-screen-md mx-auto">
      {numbers.map((number) => (
        <div
          key={number}
          className={`relative flex items-center justify-center w-12 h-12 text-xl font-semibold rounded-lg shadow-md transition-colors ${
            selectedNumbers.includes(number)
              ? "bg-gray-200 text-gray-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {selectedNumbers.includes(number) && (
            <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-red-500 opacity-65">
              X
            </span>
          )}
          {number}
        </div>
      ))}
    </div>
  );
}

export default Numbers;
