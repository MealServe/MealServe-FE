import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Menu } from '../pages/MenuDetail';

const MenuContainer = styled.div`
  width: 240px;
  height: 200px;
  background-color: grey;
  margin: 16px;
  background-color: #fff;

  label {
    margin: 16px 8px;
    display: flex;
    justify-content: end;
    gap: 8px;
  }
`;

const MenuImage = styled.img`
  width: 100%;
  max-height: 70%;
`;

const MenuDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface MenuDescriptionProps {
  menu: Menu;
  onSelect: () => void;
}

const MenuDescription: React.FC<MenuDescriptionProps> = ({
  menu,
  onSelect,
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const current = e.target as HTMLInputElement;
    const { name, value, checked } = current;
    // console.log(current.parentElement?.parentNode);
    // console.log(checked);
  };

  return (
    <MenuContainer>
      <MenuImage src={`${menu.image || '/images.jfif'}`} alt="" />
      <MenuDetail>
        <p>{menu.name}</p>
        <p>{menu.price}원</p>
      </MenuDetail>
      <label htmlFor="">
        <p>선택하기</p>
        <input type="checkbox" onChange={handleChange} />
      </label>
    </MenuContainer>
  );
};

export default MenuDescription;
