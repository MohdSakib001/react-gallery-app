/** @format */

export default function Keywords({ keywords, searchText }) {
  function searchKeyword(e) {
    searchText(e.target.textContent);
  }

  return (
    <div className="w-sm max-auto py-6 mx-5 select-none">
      <ul className="space-x-3 overflow-x-auto flex">
        {keywords.map((keyword, index) => (
          <li
            key={index}
            onClick={searchKeyword}
            className="whitespace-nowrap border border-gray-500 px-4 py-2 rounded-md text-gray-500 text-sm active:border-black active:text-black sm:hover:border-black sm:hover:text-black cursor-pointer transition duration-500 ease-in-out"
          >
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
}
