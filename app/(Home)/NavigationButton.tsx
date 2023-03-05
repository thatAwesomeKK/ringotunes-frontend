"use client";
import React from "react";

function NavigationButton({ nextPage, prevPage, isReady }: any) {
  return (
    <div className="flex justify-between mr-5 px-8">
      <button
        disabled={!isReady}
        onClick={() => prevPage()}
        className="bg-blue-400 py-2 px-5 rounded font-medium active:bg-blue-300 hover:bg-blue-500"
      >
        Prev
      </button>
      <button
        disabled={!isReady}
        onClick={() => nextPage()}
        className="bg-blue-400 py-2 px-5 rounded font-medium active:bg-blue-300 hover:bg-blue-500"
      >
        Next
      </button>
    </div>
  );
}

export default NavigationButton;
