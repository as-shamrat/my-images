import React from "react";
import { useGlobalContext } from "./context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&query=`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  console.log(searchTerm);
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const res = await axios.get(url + searchTerm);
      return res.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>Something went wrong...</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {response.data.results.map((item) => {
        const {
          id,
          alt_description,
          urls: { regular },
        } = item;

        return (
          <img key={id} alt={alt_description} src={regular} className="img" />
        );
      })}
    </section>
  );
};

export default Gallery;
