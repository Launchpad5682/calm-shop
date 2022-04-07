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
  searchTerm: "",
  addresses: [],
  modal: false,
  order: {
    address: {
      name: null,
      street: null,
      city: null,
      state: null,
      country: null,
      zipCode: null,
      mobile: null,
    },
    totalPrice: null,
  },
  loading: { products: false },
  selectedAddress: { id: null, edit: false },
  alert: { message: null, active: false, color: "green" },
};

export const DataProvider = ({ children }) => {
  const [
    {
      products,
      categories,
      cart,
      filters,
      wishlist,
      searchTerm,
      addresses,
      modal,
      order,
      selectedAddress,
      loading,
      alert,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetching products
    (async () => {
      try {
        setTimeout(() => {
          dispatch({
            type: "TOGGLE_LOADING",
            payload: { products: true },
          });
        }, 2000);
        const response = await axios.get("/api/products");

        if (response.status === 200) {
          dispatch({ type: "SET_PRODUCTS", payload: response.data });
          setTimeout(() => {
            dispatch({
              type: "TOGGLE_LOADING",
              payload: { products: false },
            });
          }, 2000);
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
    searchTerm,
    addresses,
    modal,
    order,
    selectedAddress,
    loading,
    alert,
    dispatch,
  };
  return (
    <DataProviderContext.Provider value={value}>
      {children}
    </DataProviderContext.Provider>
  );
};
