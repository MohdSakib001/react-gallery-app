/** @format */

export default function Card({ image }) {
  const tags = image.tags.split(", ");

  return (
    <div className="max-w-sm overflow-hidden shadow-md rounded-md mx-auto sm:hover:scale-105 transition-all duration-500 ease-in-out sm:hover:shadow-2xl select-none">
      <img src={image.webformatURL} alt="" className="cursor-pointer" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-400 text-xl mb-2 cursor-pointer">
          Photo by {image.user}
        </div>
        <ul>
          <li className="cursor-pointer inline-block">
            <strong>Views: </strong>
            {image.views}
          </li>
          <br />
          <li className="cursor-pointer inline-block">
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <br />
          <li className="cursor-pointer inline-block">
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 px-3 py-1 rounded-full text-gray-700 font-semibold text-sm mr-2 mb-2 cursor-pointer"
            >
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
