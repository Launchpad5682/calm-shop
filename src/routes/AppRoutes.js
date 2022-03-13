import MockmanEs from "mockman-js"
import { Route, Routes } from "react-router-dom"
import { App } from "../App";
import { AddressManagement } from "./AddressManagement/AddressManagement";
import { Cart } from "./Cart/Cart";
import { Home } from "./Home/Home";
import { ProductsListing } from "./ProductsListing/ProductsListing";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="products" element={<ProductsListing />} />
                <Route path="cart" element={<Cart />} />
                <Route path="address-management" element={<AddressManagement />} />
            </Route>
            <Route path="/api/mockman" element={<MockmanEs />} />
        </Routes>
    );
}