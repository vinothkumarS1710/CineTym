import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<MovieList apipath={"movie/now_playing"}/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="movies/top" element={<MovieList apipath={"movie/top_rated"}/>}/>
        <Route path="movies/popular" element={<MovieList apipath={"movie/popular"}/>}/>
        <Route path="movies/upcoming" element={<MovieList apipath={"movie/upcoming"}/>}/>
        <Route path="search" element={<Search apipath={"search/movie"}/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>

    )

}