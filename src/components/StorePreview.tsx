import React from 'react';
import styled from 'styled-components';
import { Store } from '../pages/Home';

const StoreContainer = styled.div`
  width: 240px;
  height: 320px;
  margin: 16px;

  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  border-radius: ${(props) => props.theme.border.borderRadius};
`;

const Image = styled.img`
  width: 100%;
  border-top-right-radius: ${(props) => props.theme.border.borderRadius};
  border-top-left-radius: ${(props) => props.theme.border.borderRadius};
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};
`;

interface StorePreviewProps {
  store: Store;
}

const StorePreview: React.FC<StorePreviewProps> = ({ store }) => {
  return (
    <StoreContainer>
      <div>
        <Image src="./images.jfif" alt="" />
        <h3>가게명: {store.name}</h3>
        <p>주소: {store.address}</p>
      </div>
    </StoreContainer>
  );
};

export default StorePreview;
