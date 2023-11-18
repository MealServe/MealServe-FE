import React from 'react';
import Store from '../components/StorePreview';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StorePreview from '../components/StorePreview';

const StoresContainer = styled.section`
  margin: auto;
  margin-top: ${(props) => props.theme.headerHeight};

  width: clamp(640px, 80%, 1640px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export interface Store {
  id: number;
  name: string;
  address: string;
}

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
];

const Home = () => {
  return (
    <StoresContainer>
      {stores.map((store) => {
        return (
          <Link
            key={`${store.name}${store.address}`}
            to={`/stores/${store.id}`}
          >
            <StorePreview />
          </Link>
        );
      })}
    </StoresContainer>
  );
};

export default Home;
