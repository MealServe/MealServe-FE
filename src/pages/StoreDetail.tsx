import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from './Home';
import MenuPreview from '../components/MenuDescription';
import styled from 'styled-components';
import { Menu } from './MenuDetail';
import HttpClient from '../network/http';
import StoreService from '../service/storeService';

const baseURL: string = process.env.REACT_APP_BASE_URL as string;
const httpClient = new HttpClient(baseURL);
const storeService = new StoreService(httpClient);

const Wrapper = styled.section`
  margin: auto;
  margin-top: ${(props) => props.theme.headerHeight};
  width: clamp(800px, 90%, 1640px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MainContainer = styled.main`
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
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

  background-color: grey;
`;

const OrderSection = styled.section`
  h3 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }

  background-color: grey;
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
];

const StoreDetail = () => {
  const { storeId } = useParams<string>() as { storeId: string };
  const [store, setStore] = useState<Store>();
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selected, setSelected] = useState<Menu[]>([]);

  // const store: Store | undefined = stores.find(
  //   (i) => i.id === parseInt(storeId)
  // );

  useEffect(() => {
    storeService.getStore(storeId).then((store) => {
      setStore(store);
      setMenus(store.menus);
    });
  }, [storeId]);

  const handleSelect = () => {};
  return (
    <Wrapper>
      <StoreDescription>
        <h1>Store: {store?.name}</h1>
        <p>주소: {store?.address}</p>
      </StoreDescription>
      <MainContainer>
        <MenusContainer>
          {menus.map((menu) => {
            return (
              <MenuPreview
                key={`${menu.name}${menu.price}`}
                menu={menu}
                onSelect={handleSelect}
              />
            );
          })}
        </MenusContainer>
        <OrderSection>
          <h3>주문하기</h3>

          <p>가격:</p>
          <form action="">
            {/* <input
            value={quantity}
            onChange={handleChange}
            type="number"
            placeholder="수량을 선택하세요"
            min="1"
          /> */}
            {/* <p>총가격: {total}원</p> */}
            <OrderButton>주문하기</OrderButton>
          </form>
        </OrderSection>
      </MainContainer>
    </Wrapper>
  );
};

export default StoreDetail;
