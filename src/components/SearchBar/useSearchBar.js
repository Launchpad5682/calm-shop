import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDataProvider } from "../../context/data-context";

export function useSearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const { dispatch } = useDataProvider();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const changeHandler = (event) => {
    if (event.target.value === "")
      dispatch({ type: "SET_SEARCH", payload: event.target.value });
    setSearchInput(event.target.value);
  };

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "SET_SEARCH", payload: event.target.value });
      dispatch({ type: "TOGGLE_LOADING", payload: { products: true } });
      setTimeout(() => {
        dispatch({
          type: "TOGGLE_LOADING",
          payload: { products: false },
        });
      }, 1000);
      if (pathname !== "/products") {
        navigate("/products");
      }
    }
  };

  const searchClickHandler = () => {
    dispatch({ type: "SET_SEARCH", payload: searchInput });
    dispatch({ type: "TOGGLE_LOADING", payload: { products: true } });
    setTimeout(() => {
      dispatch({
        type: "TOGGLE_LOADING",
        payload: { products: false },
      });
    }, 1000);
    if (pathname !== "/products") {
      navigate("/products");
    }
  };

  const clearHandler = () => {
    dispatch({ type: "SET_SEARCH", payload: "" });
    setSearchInput("");
  };

  return {
    searchInput,
    changeHandler,
    searchHandler,
    clearHandler,
    searchClickHandler,
  };
}
