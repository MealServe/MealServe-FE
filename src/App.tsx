import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StoreDetail from './pages/StoreDetail';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import RegisterStore from './pages/RegisterStore';
import RegisterMenu from './pages/RegisterMenu';
import Orders from './pages/Orders';
import HttpClient from './network/http';
import AuthService from './service/authService';
import StoreService from './service/storeService';

const baseURL: string = process.env.REACT_APP_BASE_URL as string;
const httpClient = new HttpClient(baseURL);
const authService = new AuthService(httpClient);
const storeService = new StoreService(httpClient);

// TODO: Nested Route로 refactor
function App() {
  // console.log(baseURL);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home storeService={storeService} />} />
        <Route path="/login" element={<Login authService={authService} />} />
        <Route path="/signup" element={<Signup authService={authService} />} />
        <Route path="/stores/:storeId" element={<StoreDetail />} />
        <Route
          path="/stores/register"
          element={<RegisterStore storeService={storeService} />}
        />
        <Route
          path="/stores/menus/register"
          element={<RegisterMenu storeService={storeService} />}
        />
        {/* <Route path="/stores/:storeId/menus/:menuId" element={<MenuDetail />} /> */}
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
