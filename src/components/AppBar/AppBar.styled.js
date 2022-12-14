import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 15px;
`;
export const MovList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
`;

export const NavItem = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid rgb(40, 12, 135);
  color: rgb(87, 49, 174);
  text-decoration: none;
  &.active {
    background-color: rgb(71, 109, 232);
    color: #ffffff;
  }
`;
export const Span = styled.span`
  margin-left: 10px;
`;
