import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendingMoviee } from 'service/api';

const Home = () => {
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getTrendingMoviee().then(response => {
      setMovie([...response.data.results]);
    });
  }, []);
  return (
    <>
      <h1>Trending today</h1>
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

export default Home;
