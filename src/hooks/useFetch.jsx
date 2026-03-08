import { useEffect, useState } from "react";


const useFetch = ({apipath, queryTerm}) => {
  
  const [data, setData] = useState([]);
  
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjM1MDc4MjNhYWQyZjE0N2I4ZjM5NGM0YTFmYzc2MyIsIm5iZiI6MTcyNTcyMzI0MC43ODU5OTk4LCJzdWIiOiI2NmRjNzI2OGIxNWFhZDc4MDdiOTIxYjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZWISgEcrG37TuShn25KVQJgFWT4ZNFaPKNavC0KKqvk'
  }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${apipath}?query=${queryTerm}`,
        options,
      );

      const data = await response.json();

      setData(data.results);
    }

    fetchData();
  }, [apipath, queryTerm]);
  
  
  
    return {
        data
    }
}

export default useFetch
