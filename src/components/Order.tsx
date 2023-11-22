import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { IOrder } from '../pages/Orders';

const OrderContainer = styled.div`
  width: 80vw;
  height: 88px;
  margin: 16px;
  border-bottom: 1px solid ${(props) => props.theme.border.primaryBorder};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

const Image = styled.img`
  height: 72px;
`;

const AddressSection = styled.div`
  width: 15%;
`;

const DetailSection = styled.div`
  height: 72px;
  overflow-y: scroll;
  width: 40%;

  div {
    display: flex;
    gap: 16px;
    margin: 4px;
  }
`;

const CompleteButton = styled.button`
  background-color: ${(props) => props.theme.colors.primaryColor};

  color: white;
  width: 48px;
  padding: 12px 8px;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:active {
    color: ${(props) => props.theme.colors.primaryColor};
    background-color: ${(props) => props.theme.colors.bgColor};
  }
`;

const DeliveryStatus = styled.div``;

interface OrderProps {
  order: IOrder;
}

type deliveryStatus = 'PENDING' | 'COMPLETED';

const Order: React.FC<OrderProps> = ({ order }) => {
  const [deliveryStatus, setDeliveryStatus] =
    useState<deliveryStatus>('PENDING');

  const handleClick = (e: React.MouseEvent) => {
    if (deliveryStatus === 'PENDING') {
      setDeliveryStatus('COMPLETED');
      return;
    }
    if (deliveryStatus === 'COMPLETED') {
      setDeliveryStatus('PENDING');
      return;
    }
  };
  return (
    <OrderContainer>
      <Image src={order.menus[0].image} alt="" />
      <AddressSection>주소: {order.address}</AddressSection>
      <DetailSection>
        {order.menus.map((menu) => {
          return (
            <div key={`${order.createdAt}`}>
              <p>메뉴명: {menu.name}</p>
              <p>수량: {menu.quantity}</p>
            </div>
          );
        })}
      </DetailSection>
      <p>총 금액</p>
      <p>{order.totalPrice}원</p>
      <DeliveryStatus>
        <div>
          <p>배달 상태:</p>
          <p>{deliveryStatus}</p>
        </div>
      </DeliveryStatus>
      <CompleteButton onClick={handleClick}>
        {deliveryStatus === 'PENDING' ? '배달완료' : '배달완료 취소'}
      </CompleteButton>
    </OrderContainer>
  );
};

export default Order;
