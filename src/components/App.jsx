import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import {Home} from "../pages/Home";
import {Movies} from "../pages/Movies";
import {MovieDetails} from "../pages/MovieDetails";
import {Cast} from "../pages/Cast";
import {Reviews} from "../pages/Reviews";
import { Query } from "pages/Query";
import { SharedLayout } from "./SharedLayout";


// const API_KEY = '7653694c4941db1f3bfb7af19c86b9a8';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} >
            <Route path=":query" element={<Query />} />
            <Route path=":movieId" element={<MovieDetails />} >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};