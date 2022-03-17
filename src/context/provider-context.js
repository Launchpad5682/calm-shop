import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

export const ProviderContext = createContext();

export const useProvider = () => useContext(ProviderContext);

const initialState = {
  products: { products: [] },
  categories: {},
  filters: {
    categories: [],
    filterRating: null,
    priceUpperRange: null,
    sortBy: null,
  },
  cart: {
    products: [],
    decrement: false,
  },
  wishlist: { products: [] },
};

export const Provider = ({ children }) => {
  const [{ categories }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
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
    categories,
    dispatch,
  };
  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};
