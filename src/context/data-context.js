import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

export const DataProviderContext = createContext();

export const useDataProvider = () => useContext(DataProviderContext);

const initialState = {
  products: { products: [] },
  categories: {},
  filters: {
    categories: [],
    filterRating: null,
    priceUpperRange: null,
    sortBy: null,
  },
  cart: [],
  wishlist: [],
  addresses: [],
};

export const DataProvider = ({ children }) => {
  const [
    { products, categories, cart, filters, wishlist, addresses },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetching products
    (async () => {
      try {
        const response = await axios.get("/api/products");

        if (response.status === 200) {
          dispatch({ type: "SET_PRODUCTS", payload: response.data });
        }
      } catch (error) {
        console.error("Error in Product Listing", error);
      }
    })();

    // fetching categories
    (async () => {
      try {
        const response = await axios.get("/api/categories");

        if (response.status === 200) {
          dispatch({ type: "SET_CATEGORIES", payload: response.data });
        }
      } catch (error) {
        console.error("Error in categories", error);
      }
    })();
  }, []);

  const value = {
    products,
    categories,
    cart,
    filters,
    wishlist,
    addresses,
    dispatch,
  };
  return (
    <DataProviderContext.Provider value={value}>
      {children}
    </DataProviderContext.Provider>
  );
};
