import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Footer from './components/Footer/Footer';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import ItemList from './pages/ItemList/ItemList';
import Cart from './pages/Cart/Cart';
import ScrollToTop from './components/Scroll/Scroll';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products/detail/:id" element={<ItemDetail />} />
        <Route path="/Products/:id" element={<ItemList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
