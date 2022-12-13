import { MovList, NavItem, Header, Span } from './Header.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <MovList>
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
        </MovList>
      </nav>
    </Header>
  );
};
