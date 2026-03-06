import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const MovieDetails = () => {
  const {id} = useParams();
  const [detail, setDetail] = useState([]);
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjM1MDc4MjNhYWQyZjE0N2I4ZjM5NGM0YTFmYzc2MyIsIm5iZiI6MTcyNTcyMzI0MC43ODU5OTk4LCJzdWIiOiI2NmRjNzI2OGIxNWFhZDc4MDdiOTIxYjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZWISgEcrG37TuShn25KVQJgFWT4ZNFaPKNavC0KKqvk'
    }
    };
  
   useEffect(() => {
  
      async function fetchDetail(){
  
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`,options);
  
        const data = await response.json();

       setDetail(data)
   
        
      }
  
      fetchDetail();
    },[id]);
  return (
    <main>
    MovieDetails


    <h2>{detail.original_title}</h2>
    {console.log(detail)}
    </main>
  )
}

export default MovieDetails
