import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<MovieList apipath={"now_playing"}/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="movies/top" element={<MovieList apipath={"top_rated"}/>}/>
        <Route path="movies/popular" element={<MovieList apipath={"popular"}/>}/>
        <Route path="movies/upcoming" element={<MovieList apipath={"upcoming"}/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>

    )

}