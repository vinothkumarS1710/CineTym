import { Link } from "react-router-dom";


const Card = ({movie}) => {
  
  const {id, original_title, overview, poster_path} = movie; 
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`
  
  
  return (
    <Link to={`movie/${id}`}>
    <div className="bg-neutral-primary-soft mx-auto block max-w-xs p-6 border border-default rounded-base shadow-xs">
      <img
        className="rounded-t-lg"
        src={image}
        alt=""
      />

            
      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
        {original_title}
       </h5>
      <p className="mb-6 text-body line-clamp-3">
         {overview}
      </p>
            
      </div>
  </Link>
  )
}

export default Card
