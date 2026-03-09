import { useEffect, useState } from "react";
import { options } from "../utils/options";


const useFetch = (apipath, queryTerm) => {
  
  const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        let url = `https://api.themoviedb.org/3/${apipath}`;

        if (queryTerm) {
          url += `?query=${queryTerm}`;
        }
        const response = await fetch(url, options);
        const data = await response.json();

        setData(data.results || []);
      }

      fetchData();
    }, [apipath, queryTerm]);
  
  
    return {
        data
    }
}

export default useFetch
