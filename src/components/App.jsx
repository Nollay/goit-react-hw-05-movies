import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movie = lazy(() => import('../pages/Movie/Movie'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movie />} />
        </Route>
      </Routes>
    </>
  );
};
