import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userEmailState, userRoleState } from '../recoil/atoms';
import cookie from 'react-cookies';

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

const NavBar = () => {
  const userRole = useRecoilValue(userRoleState);
  const setUserRoleState = useSetRecoilState(userRoleState);
  const setUserEmailState = useSetRecoilState(userEmailState);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setUserRoleState('');
    setUserEmailState('');
    cookie.remove('Authorization');
  };

  return (
    <NavBarContainer>
      <NavList>
        {!userRole ? null : (
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
            <li>
              <Link to="/orders">
                <Button>주문 관리</Button>
              </Link>
            </li>
            <li>
              <Button onClick={handleClick}>Logout</Button>
            </li>
          </>
        )}

        {/* TODO: toggle 하는 방식으로 변경하기 */}
        {userRole ? null : (
          <>
            <li>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <Button>가입하기</Button>
              </Link>
            </li>
          </>
        )}
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
