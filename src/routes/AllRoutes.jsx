import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="movies/top" element={<MovieList/>}/>
        <Route path="movies/popular" element={<MovieList/>}/>
        <Route path="movies/upcoming" element={<MovieList/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>

    )

}