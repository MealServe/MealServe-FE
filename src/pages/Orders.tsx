import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Order from '../components/Order';
import StoreService from '../service/storeService';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
  padding-top: 8px;
  margin-top: ${(props) => props.theme.headerHeight};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

interface OrderedMenu {
  menuId: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface IOrder {
  userId: number;
  address: string;
  createdAt: Date;
  menus: OrderedMenu[];
  totalPrice: number;
  isComplete: string;
}

// const orders: IOrder[] = [
//   {
//     userId: 1,
//     address: '서울',
//     createdAt: new Date(),
//     menus: [
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//     ],
//     totalPrice: 20000,
//     isComplete: '출발전',
//   },
//   {
//     userId: 2,
//     address: '서울',
//     createdAt: new Date(),
//     menus: [
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//     ],
//     totalPrice: 20000,
//     isComplete: '출발전',
//   },
//   {
//     userId: 3,
//     address: '서울',
//     createdAt: new Date(),
//     menus: [
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//     ],
//     totalPrice: 20000,
//     isComplete: '출발전',
//   },
//   {
//     userId: 4,
//     address: '서울',
//     createdAt: new Date(),
//     menus: [
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//     ],
//     totalPrice: 20000,
//     isComplete: '출발전',
//   },
//   {
//     userId: 5,
//     address: '서울',
//     createdAt: new Date(),
//     menus: [
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//       {
//         menuId: 1,
//         name: 'menu name',
//         quantity: 1,
//         price: 10000,
//         image: './chicken.jpg',
//       },
//     ],
//     totalPrice: 20000,
//     isComplete: '출발전',
//   },
// ];

interface OrderProps {
  storeService: StoreService;
}

const Orders: React.FC<OrderProps> = ({storeService}) => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    storeService.getOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  return (
    <Wrapper>
      <h1>주문 내역 조회</h1>
      <ul>
        {orders.map((order) => {
          return (
            <li key={`${order.address}${order.createdAt}`}>
              <Order order={order} />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Orders;
