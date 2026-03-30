import { useNavigate } from "react-router-dom";
import BackUp from "../assets/backup.jfif"

const Card = ({movie}) => {
  
  const {original_title, overview, poster_path} = movie; 
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : BackUp;

  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/movie/${movie.id}`);
  };

  
  
  return (
    <div className="bg-neutral-primary-soft mx-auto block max-w-xs p-6 border border-black hover:border-[#ff3e03] hover:border-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105" onClick={goToMovie}>
      <img className="rounded-t-lg h-96 mx-auto" src={image} alt="" />

      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
        {original_title}
      </h5>

      <p className="mb-6 text-body line-clamp-3">{overview}</p>
    </div>
  );
}

export default Card
