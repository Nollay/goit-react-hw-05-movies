import { MovieList, NavItem, Header, Span } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <MovieList>
          <li>
            <NavItem to={'/'}>
              <Span>Home</Span>
            </NavItem>
          </li>
          <li>
            <NavItem to={'/movies'}>
              <Span>Movies</Span>
            </NavItem>
          </li>
        </MovieList>
      </nav>
    </Header>
  );
};
