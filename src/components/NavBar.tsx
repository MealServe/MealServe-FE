import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavBarContainer = styled.nav``;

const NavList = styled.ul`
  display: flex;
`;

const Button = styled.button`
  margin-right: 16px;
  color: ${(props) => props.theme.colors.primaryColor};

  padding: 16px 8px;
  height: 56px;
  min-width: 88px;

  font-size: 16px;
  font-weight: bold;
  border-radius: ${(props) => props.theme.border.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  transition: all 0.2s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.bgColor};
  }
`;

const authUrls = ['/login', '/signup'];

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <NavBarContainer>
      <NavList>
        {authUrls.includes(pathname) || (
          <>
            <li>
              <Link to="/stores/register">
                <Button>업장 등록</Button>
              </Link>
            </li>
            <li>
              <Link to="/stores/menus/register">
                <Button>메뉴 등록</Button>
              </Link>
            </li>
          </>
        )}

        {pathname === '/login' || (
          <li>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </li>
        )}
        {pathname === '/signup' || (
          <li>
            <Link to="/signup">
              <Button>가입하기</Button>
            </Link>
          </li>
        )}
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
