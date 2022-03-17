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

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsListing />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="address-management" element={<AddressManagement />} />
        <Route path="wishlist" element={<WishList />} />
      </Route>
      <Route path="/api/mockman" element={<MockmanEs />} />
    </Routes>
  );
}
