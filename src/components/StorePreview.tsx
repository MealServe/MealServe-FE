import React from 'react';
import styled from 'styled-components';

const StoreContainer = styled.div`
  width: 240px;
  height: 320px;
  background-color: grey;
  margin: 16px;
`;

const StorePreview = () => {
  return <StoreContainer>Store</StoreContainer>;
};

export default StorePreview;
