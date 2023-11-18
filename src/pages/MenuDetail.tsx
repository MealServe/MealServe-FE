import React, { useState } from 'react';
import styled from 'styled-components';

const MenuDetailContainer = styled.section`
  margin: auto;
  margin-top: ${(props) => props.theme.headerHeight};
  width: clamp(800px, 80%, 1640px);

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;

const MenuDescription = styled.section`
  padding: 0px 0px 16px 32px;
  margin-top: 2rem;

  border-right: 2px solid ${(props) => props.theme.border.tertiaryBorder};
  width: 100%;
  h2 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  img {
    width: 80%;
  }
`;

const OrderSection = styled.section`
  margin-top: 2rem;

  h3 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

const OrderButton = styled.button`
  background-color: ${(props) => props.theme.colors.primaryColor};

  color: white;
  padding: 12px 24px;
  margin: 8px;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:active {
    color: ${(props) => props.theme.colors.primaryColor};
    background-color: ${(props) => props.theme.colors.bgColor};
    border: 2px solid ${(props) => props.theme.colors.primaryColor};
  }
`;

export interface Menu {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const menu: Menu = {
  id: 1,
  name: '후라이드 치킨',
  price: 20000,
  imageUrl: '/chicken.jpg',
};

const MenuDetail = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(menu.price);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setQuantity(Number(value));
    setTotal(Number(value) * menu.price);
  };

  return (
    <MenuDetailContainer>
      <MenuDescription>
        <h2>{menu.name}</h2>
        <img src={menu.imageUrl} alt="" />
      </MenuDescription>
      <OrderSection>
        <h3>주문하기</h3>

        <p>가격: {menu.price}</p>
        <p>수량: </p>
        <form action="">
          <input
            value={quantity}
            onChange={handleChange}
            type="number"
            placeholder="수량을 선택하세요"
            min="1"
          />
          <p>총가격: {total}원</p>
          <OrderButton>장바구니 추가</OrderButton>
        </form>
      </OrderSection>
    </MenuDetailContainer>
  );
};

export default MenuDetail;
