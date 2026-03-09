import { useEffect } from "react";

const useTitle = (title) => {
   useEffect(()=>{
      document.title=`${title} | CineTym`
    },[title])
    
}

export default useTitle
