/** @format */
import React, { useState, useEffect } from "react";
import Card from "./components/Card.jsx";
import ImageSearch from "./components/ImageSearch.jsx";
import Keywords from "./components/Keywords.jsx";

function App() {
  // some variables to keep track
  // An empty array of images
  const [images, setImages] = useState([]);
  // This will show if the image is loading or not
  const [isLoading, setIsLoading] = useState(true);
  // the term contains the img type (flower)
  const [term, setTerm] = useState("");
  // Keywords for user suggestions
  const [keywords, setKeywords] = useState([]);

  // API key
  const apiKey = "42820815-7d2ab5c91c2e43975c146bc60";

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // Fetching the Api which returns a response
        const res = await fetch(
          `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`
        );
        // Convert that response into json format
        const data = await res.json();

        // move the entire array of images into our array
        setImages(data.hits);
        setIsLoading(false);

        // created an array of keywords/tags for user suggestions
        let list = String(data.hits.map((hit) => hit.tags)).split(",");
        setKeywords(list);
      } catch (err) {
        console.error(err);
      }
    };
    fetchApi();
  }, [term]);

  return (
    <div className="container mx-auto">
      {/* This searchText will set the term as the text which is prop down by child component */}
      <ImageSearch searchText={(text) => setTerm(text)} />

      <Keywords keywords={keywords} searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-center mx-auto text-6xl mt-32 font-semibold">
          No Images Found
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-center mx-auto text-6xl mt-32 font-semibold">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-1 gap-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 mx-auto">
          {images.map((image) => {
            return <Card key={image.id} image={image} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
