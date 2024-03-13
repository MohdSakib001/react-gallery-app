/** @format */
import React, { useState } from "react";
export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  function textUpdate(e) {
    setText(() => e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // On Submit wewill search the images
    searchText(text);
  }

  return (
    <div className="max-w-sm mx-auto text-center mt-10">
      <form
        onSubmit={onSubmit}
        className="flex flex-1 gap-x-1 border-b-2 border-gray-400 py-2"
      >
        <input
          type="text"
          onChange={textUpdate}
          className="w-full placeholder:text-gray-400 px-2 focus:outline-none"
          placeholder="Search Image Term..."
        />
        <button
          type="submit"
          className="text-white px-4 py-2 rounded-md bg-[#52A8A6]"
        >
          Search
        </button>
      </form>
    </div>
  );
}
