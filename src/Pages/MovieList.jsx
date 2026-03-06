import { useEffect, useState } from "react";
import Card from "../components/Card";

const MovieList = () => {
   
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjM1MDc4MjNhYWQyZjE0N2I4ZjM5NGM0YTFmYzc2MyIsIm5iZiI6MTcyNTcyMzI0MC43ODU5OTk4LCJzdWIiOiI2NmRjNzI2OGIxNWFhZDc4MDdiOTIxYjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZWISgEcrG37TuShn25KVQJgFWT4ZNFaPKNavC0KKqvk'
  }
  };

  const [movies,setMovies] = useState([]);

  useEffect(() => {

    async function fetchMovies(){

      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing",options);

      const data = await response.json();

      setMovies(data.results);     

    }

    fetchMovies();
  },[]);
  
  
  return (
    <main>
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))
          }
        </div>
      </section>
    </main>
  );
}

export default MovieList
