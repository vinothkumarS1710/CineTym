import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<MovieList apipath="movie/now_playing" title="Home"/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="movies/top" element={<MovieList apipath="movie/top_rated" title="Top movies"/>}/>
        <Route path="movies/popular" element={<MovieList apipath="movie/popular" title="Popular"/>}/>
        <Route path="movies/upcoming" element={<MovieList apipath="movie/upcoming" title="Upcoming"/>}/>
        <Route path="search" element={<Search apipath="search/movie"/>}/>
        <Route path="*" element={<PageNotFound title="Page not found"/>}/>
    </Routes>

    )

}