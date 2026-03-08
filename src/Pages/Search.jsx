import { useSearchParams } from "react-router-dom"
import Card from "../components/Card"
import useFetch from "../hooks/useFetch"


const Search = ({apipath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");
  const {data:movies} = useFetch({apipath, queryTerm});

  return (
    <main>
      <p class="text-center text-body text-xl font-semibold">
        {movies.length === 0 ? `Movies not found` : `Results for "${queryTerm}"`}
      </p>
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search
