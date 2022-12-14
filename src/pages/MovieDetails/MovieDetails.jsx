import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieId } from 'service/api';
import {
  Flex,
  IMG,
  GoBack,
  Description,
  LinkList,
  LinkNav,
} from './MovieDetails.styled';
import {
  BsFillArrowLeftCircleFill,
  BsChatRightText,
  BsPersonLinesFill,
} from 'react-icons/bs';
const MovieDetails = () => {
  const location = useLocation();
  const [movies, setMovies] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    getMovieId(movieId).then(response => {
      setMovies(response.data);
    });
  }, [movieId]);
  const backLink = location.state?.from ?? '/';

  return (
    <>
      <GoBack to={backLink}>
        <span>Go back</span>
      </GoBack>
      <Flex>
        <div>
          <IMG
            src={
              movies.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movies.poster_path
                : 'https://ik.imagekit.io/dqs5dhaf3/page-not-found-error-with-film-flap-design-vector-33133106_8zxj4ah09.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667913391220'
            }
            alt={movies.title}
            width={250}
          />
        </div>
        <div>
          <h2>{movies.title}</h2>
          <Description>{movies.overview}</Description>
          <p>
            Genres:{' '}
            {movies.genres &&
              movies.genres.map(genre => genre.name).join(' , ')}
          </p>
          <p>Release: {new Date(movies.release_date).toLocaleDateString()}</p>
        </div>
      </Flex>
      <LinkList>
        <li>
          <LinkNav to="cast" state={{ from: backLink }}>
            <span>Cast</span>
          </LinkNav>
        </li>
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
// import {
//   Back,
//   Description,
//   LinkList,
//   LinkNav,
//   Flex,
//   Img,
// } from './MovieDetails.styled';

// const MovieDetails = () => {
//   const location = useLocation();
//   const [movie, setMuvie] = useState({});
//   const { movieId } = useParams();
//   useEffect(() => {
//     getMovieId(movieId).then(response => {
//       setMuvie(response.data);
//     });
//   }),
//     [movieId];

//   const backLink = location.state?.from ?? '/';

//   return (
//     <>
//       <Back to={backLink}>
//         <span>Go back</span>
//       </Back>
//       <Flex>
//         <div>
//           <Img
//             src={
//               movie.poster_path
//                 ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
//                 : 'https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf'
//             }
//             alt={movie.title}
//             width={300}
//           />
//         </div>
//         <div>
//           <h2>{movie.title}</h2>
//           <Description>{movie.overview}</Description>
//           <p>
//             Genres:{' '}
//             {movie.genres && movie.genres.map(genre => genre.name).join(' , ')}
//           </p>
//           <p>Release: {new Date(movie.release_date).toLocaleDateString()}</p>
//         </div>
//       </Flex>
//       <LinkList>
//         <li>
//           <LinkNav to="cast" state={{ from: backLink }}>
//             <span>Cast</span>
//           </LinkNav>
//         </li>
//         <li></li>
//         <li>
//           <LinkNav to="reviews" state={{ from: backLink }}>
//             <span>Review</span>
//           </LinkNav>
//         </li>
//       </LinkList>
//       <Suspense>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };
// export default MovieDetails;
