import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Store } from './Home';
import { Link } from 'react-router-dom';
import MenuPreview from '../components/MenuPreview';
import styled from 'styled-components';
import { Menu } from './MenuDetail';

const Wrapper = styled.section`
  margin: auto;
  margin-top: ${(props) => props.theme.headerHeight};
  width: clamp(800px, 80%, 1640px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const StoreDescription = styled.section`
  padding: 0px 0px 16px 32px;
  margin-top: 2rem;

  border-bottom: 2px solid ${(props) => props.theme.border.tertiaryBorder};
  width: 100%;
  h1 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

const MenusContainer = styled.section`
  margin: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const menus: Menu[] = [
  {
    id: 1,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
  {
    id: 2,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
  {
    id: 3,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
  {
    id: 4,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
  {
    id: 5,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
  {
    id: 6,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
  {
    id: 7,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
  {
    id: 8,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
  {
    id: 9,
    name: '후라이드 치킨',
    price: 20000,
    imageUrl: '/chicken.jpg',
  },
];

const stores: Store[] = [
  {
    id: 1,
    name: '배민',
    address: '서울',
  },
  {
    id: 2,
    name: '굽네치킨',
    address: '서울',
  },
  {
    id: 3,
    name: '해운대맛집',
    address: '부산',
  },
  {
    id: 4,
    name: '배민',
    address: '서울',
  },
  {
    id: 5,
    name: '굽네치킨',
    address: '서울',
  },
  {
    id: 6,
    name: '해운대맛집',
    address: '부산',
  },
  {
    id: 7,
    name: '배민',
    address: '서울',
  },
  {
    id: 8,
    name: '굽네치킨',
    address: '서울',
  },
  {
    id: 9,
    name: '해운대맛집',
    address: '부산',
  },
  {
    id: 10,
    name: '배민',
    address: '서울',
  },
  {
    id: 11,
    name: '굽네치킨',
    address: '서울',
  },
  {
    id: 12,
    name: '해운대맛집',
    address: '부산',
  },
  {
    id: 1,
    name: '배민',
    address: '서울',
  },
  {
    id: 2,
    name: '굽네치킨',
    address: '서울',
  },
  {
    id: 3,
    name: '해운대맛집',
    address: '부산',
  },
  {
    id: 4,
    name: '배민',
    address: '서울',
  },
  {
    id: 5,
    name: '굽네치킨',
    address: '서울',
  },
  {
    id: 6,
    name: '해운대맛집',
    address: '부산',
  },
  {
    id: 7,
    name: '배민',
    address: '서울',
  },
  {
    id: 8,
    name: '굽네치킨',
    address: '서울',
  },
  {
    id: 9,
    name: '해운대맛집',
    address: '부산',
  },
  {
    id: 10,
    name: '배민',
    address: '서울',
  },
  {
    id: 11,
    name: '굽네치킨',
    address: '서울',
  },
  {
    id: 12,
    name: '해운대맛집',
    address: '부산',
  },
];

const StoreDetail = () => {
  const { storeId } = useParams<string>() as { storeId: string };
  const store: Store | undefined = stores.find(
    (i) => i.id === parseInt(storeId)
  );

  return (
    <Wrapper>
      <StoreDescription>
        <h1>Store: {store?.name}</h1>
        <p>주소: {store?.address}</p>
      </StoreDescription>
      <Outlet />
      <MenusContainer>
        {menus.map((menu) => {
          return (
            <Link
              key={`${menu.name}${menu.price}`}
              to={`/stores/${storeId}/menus/${menu.id}`}
            >
              <MenuPreview />
            </Link>
          );
        })}
      </MenusContainer>
    </Wrapper>
  );
};

export default StoreDetail;
