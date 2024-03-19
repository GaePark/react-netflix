import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(`/movie/${movieId}`);

        setMovie(request.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, [movieId, movie]);
  console.log("movie", movie.backdrop_path);

  if (!movie) return <div>...loading</div>;
  return (
    <div>
      <section>
        <img
          className="modal__poster-img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="poster"
        />
      </section>
    </div>
  );
}
