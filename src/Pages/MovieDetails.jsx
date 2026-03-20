import useTitle from "../hooks/useTitle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/options";
import BackUp from "../assets/backup.jfif";

const MovieDetails = () => {
  const {id} = useParams();
  const [detail, setDetail] = useState({});
  const {original_title, overview, poster_path, genres, vote_average, vote_count} = detail; 
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : BackUp;
  useTitle(original_title);

  useEffect(() => {
  
    async function fetchDetail(){
  
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`,options);
  
      const data = await response.json();

      setDetail(data)
    }
  
    fetchDetail();
  
  },[id]);
  
  return (
    <main className="p-12 bg-neutral-primary-soft block m-8 max-h-sm border border-default rounded-lg shadow-xs relative overflow-hidden">
      <div className="absolute inset-[-40px] bg-cover bg-center blur-xl"
      style={{ backgroundImage: `url(${image})` }}></div>
      <section className="flex justify-around flex-wrap items-center ">
        <div className="max-w-sm pr-5 relative">
          <img src={image} alt="" className="rounded-xl" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg relative text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {original_title}
          </h1>
          <p className="my-4 text-center lg:text-left">{overview}</p>
          <p className="flex flex-wrap my-7 gap-4 justify-center lg:justify-start">
            {genres?.map((genre) => (
              <span
                className="mr-2 border border-white-700 rounded p-2"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <svg
              className="w-5 h-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <p className="ms-2 text-sm font-bold text-white-900">
              {vote_average}
            </p>

            <span className="w-1 h-1 mx-1.5 bg-gray-400 rounded-full"></span>

            <a
              href="#"
              className="text-sm font-medium text-white-900 underline hover:no-underline"
            >
              {vote_count} reviews
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MovieDetails
