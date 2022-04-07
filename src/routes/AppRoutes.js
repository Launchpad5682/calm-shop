import React from "react";
import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import { AddressManagement } from "./AddressManagement/AddressManagement";
import { Cart } from "./Cart/Cart";
import { Home } from "./Home/Home";
import { ProductsListing } from "./ProductsListing/ProductsListing";
import { SingleProductPage } from "./SingleProductPage/SingleProductPage";
import { WishList } from "./WishList/WishList";
import { PrivateRoute } from "../helper/PrivateRoute";
import { Login } from "./Auth/Login";
import { User } from "./User/User";
import { Checkout } from "./Checkout/Checkout";
import { OrderSummary } from "./OrderSummary/OrderSummary";
import { Signup } from "./Auth/Signup";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsListing />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="cart" element={<Cart />} />
          <Route path="address-management" element={<AddressManagement />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="user" element={<User />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-summary" element={<OrderSummary />} />
        </Route>
        <Route path="*" element={<>404 page not found</>} />
      </Route>
      <Route path="/api/mockman" element={<MockmanEs />} />
    </Routes>
  );
}
