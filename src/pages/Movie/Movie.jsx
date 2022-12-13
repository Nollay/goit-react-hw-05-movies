import React, { useState } from 'react';
import { useEffect } from 'react';
import { getMovieName } from 'service/api';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movie = () => {
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();
  const searchQuery = SearchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery !== '') {
      getMovieName(searchQuery)
        .then(response => {
          if (response.data.results.length === 0) {
            toast.error('Nothing found!');
          }
          if (response.data.results.length > 0) {
            setMovie([...response.data.results]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }),
    [searchQuery];

  const handlSubmit = e => {
    e.preventDefault();
    setSearchParams(
      e.target.elements.query.value !== ''
        ? { query: e.target.elements.query.value }
        : {}
    );
    setMovie([]);
    e.target.elements.query.value = '';
  };

  return (
    <>
      {''}
      <ToastContainer />
      <form onSubmit={handlSubmit}>
        <input name="query" type="text" placeholder="Search movies" />
      </form>
      {movie.length > 0 && (
        <ul>
          {movie.map(({ id, title, release_date }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  <h2>
                    {title} ({release_date.slice(0, 4)})
                  </h2>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movie;
