import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StorePreview from '../components/StorePreview';
import StoreService from '../service/storeService';
import { Menu } from './MenuDetail';
import { useRecoilValue } from 'recoil';
import { userRoleState } from '../recoil/atoms';

const Wrapper = styled.section`
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
  menus?: Menu[];
}

interface HomeProps {
  storeService: StoreService;
}

const Home: React.FC<HomeProps> = ({ storeService }) => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    storeService.getStores().then((stores) => {
      // console.log(stores);
      setStores(stores.content);
    });
  }, []);
  const userRole = useRecoilValue(userRoleState);
  // console.log('role', userRole);

  return (
    <Wrapper>
      {stores.map((store) => {
        return (
          <Link
            key={`${store.name}${store.address}`}
            to={`/stores/${store.id}`}
          >
            <StorePreview store={store} />
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Home;
