import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavbarPage from "./components/Navbar";

// Pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
import BookDetailPage from "./pages/Detail";
import OrderPage from "./pages/ViewOrder";
import ViewOrderDetail from "./pages/ViewOrderDetail";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="https://gilani-ra-bookify.netlify.app/login" element={<LoginPage />} />
        <Route path="https://gilani-ra-bookify.netlify.app/register" element={<RegisterPage />} />
        <Route path="https://gilani-ra-bookify.netlify.app/book/list" element={<ListingPage />} />
        <Route path="https://gilani-ra-bookify.netlify.app/book/view/:bookId" element={<BookDetailPage />} />
        <Route path="https://gilani-ra-bookify.netlify.app/book/orders" element={<OrderPage />} />
        <Route path="https://gilani-ra-bookify.netlify.app/books/orders/:bookId" element={<ViewOrderDetail />} />
      </Routes>
    </div>
  );
}

export default App;
