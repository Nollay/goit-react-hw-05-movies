import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Flex = styled.div`
  display: flex;
`;

export const Img = styled.img`
  display: block;
  margin-right: 25px;
`;
export const Back = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px;
  text-decoration: none;
  color: rgb(32, 38, 57);
  transition: color 250ms;
  span {
    margin-left: 10px;
  }
  :hover {
    color: #3498db;
  }
`;

export const Description = styled.p`
  width: 600px;
`;
export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
`;
export const LinkNav = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  color: rgb(32, 38, 57);
  border: 1px solid rgb(32, 38, 57);
  border-radius: 8px;
  transition: color border 300ms;
  span {
    margin-left: 5px;
  }
  :hover {
    color: tomato;
    border: 1px solid tomato;
  }
`;
