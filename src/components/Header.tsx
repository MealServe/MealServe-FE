import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.colors.bgColor};

  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: 16px;
  margin-bottom: 16px;
  border-bottom: 2px solid ${(props) => props.theme.border.tertiaryBorder};
`;

const TitleContainer = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.primaryColor};
    font-size: 32px;
    font-weight: bold;
  }
  a {
    display: flex;
    align-items: end;
  }

  img {
    width: 80px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: clamp(400px, 50%, 800px);
`;

const SearchInput = styled.input`
  height: 40px;
  width: 90%;
  font-size: 16px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.border.primaryBorder};
  padding-left: 16px;

  &:focus {
    outline-color: ${(props) => props.theme.colors.primaryColor};
  }
`;

const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  font-size: 24px;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <TitleContainer>
          <Link to="/">
            <img src="./images.jfif" alt="Logo" />
            <h1>항해의 민족</h1>
          </Link>
        </TitleContainer>
        <SearchBar>
          <SearchInput></SearchInput>
          <SearchBtn>
            <IoSearch />
          </SearchBtn>
        </SearchBar>

        <NavBar />
      </HeaderContainer>
    </>
  );
};

export default Header;
