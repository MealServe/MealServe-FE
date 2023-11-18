import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StoreDetail from './pages/StoreDetail';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import MenuDetail from './pages/MenuDetail';
import RegisterStore from './pages/RegisterStore';
import RegisterMenu from './pages/RegisterMenu';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/stores/:storeId" element={<StoreDetail />} />
        <Route path="/stores/register" element={<RegisterStore />} />
        <Route path="/stores/menus/register" element={<RegisterMenu />} />
        <Route path="/stores/:storeId/menus/:menuId" element={<MenuDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
