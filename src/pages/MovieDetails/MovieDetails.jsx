import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieId } from 'service/api';
import {
  Back,
  Description,
  LinkList,
  LinkNav,
  Flex,
  Img,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMuvie] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    getMovieId(movieId).then(response => {
      setMuvie(response.data);
    });
  }),
    [movieId];

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Back to={backLink}>
        <span>Go back</span>
      </Back>
      <Flex>
        <div>
          <Img
            src={
              movie.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                : 'https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf'
            }
            alt={movie.title}
            width={300}
          />
        </div>
        <div>
          <h2>{movie.title}</h2>
          <Description>{movie.overview}</Description>
          <p>
            Genres:{' '}
            {movie.genres && movie.genres.map(genre => genre.name).join(' , ')}
          </p>
          <p>Release: {new Date(movie.release_date).toLocaleDateString()}</p>
        </div>
      </Flex>
      <LinkList>
        <li>
          <LinkNav to="reviews" state={{ from: backLink }}>
            <span>Review</span>
          </LinkNav>
        </li>
      </LinkList>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
