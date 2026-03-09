import useTitle from "../hooks/useTitle";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const MovieList = ({apipath, title}) => {
   
  const {data:movies} = useFetch(apipath); 
  useTitle(title);
  
  
  return (
    <main>
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))
          }
        </div>
      </section>
    </main>



  );
}

export default MovieList
