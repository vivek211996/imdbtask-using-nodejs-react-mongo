import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Grid } from "@material-ui/core";

function List() {
  useEffect(() => {
    fetch("http://localhost:4040/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
        console.log(data.movies);
      });
  }, []);

  const [movies, setMovies] = useState([]);

  return (
    <div>
      <Grid container spacing={3} className="mt-3">
        {movies.map((movie) => (
          <Grid item sm={6} md={5} lg={4} key={movie._id}>
            <MovieCard movie={movie}  />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
