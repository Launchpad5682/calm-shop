import axios from "axios";
import { useDataProvider } from "../context/data-context";
import { useAuthProvider } from "../context/auth-context";

export function useCartAndWishList() {
  const { dispatch } = useDataProvider();
  const { token } = useAuthProvider();

  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: product },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        dispatch({ type: "SET_CART", payload: response.data.cart });
      }
    } catch (error) {
      console.error("Error while loading cart");
    }
  };

  const increaseQuantity = async (product) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        { action: { type: "increment" } },
        { headers: { authorization: token } }
      );
      if (response.status === 200) {
        dispatch({ type: "SET_CART", payload: response.data.cart });
      }
    } catch (error) {
      console.error("Error while loading cart");
    }
  };

  const decreaseQuantity = async (product) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        { action: { type: "decrement" } },
        { headers: { authorization: token } }
      );

      if (response.status === 200) {
        dispatch({ type: "SET_CART", payload: response.data.cart });
      }
    } catch (error) {
      console.error("Error while loading cart");
    }
  };

  const removeFromCart = async (product) => {
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: { authorization: token },
      });
      dispatch({ type: "SET_CART", payload: response.data.cart });
    } catch (error) {
      console.error("Error while loading cart");
    }
  };

  const addToWishList = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: product },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        dispatch({ type: "SET_WISHLIST", payload: response.data.wishlist });
      }
    } catch (error) {
      console.error("Error while loading cart");
    }
  };
  const removeFromWishList = (product) =>
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });

  return {
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList,
    increaseQuantity,
    decreaseQuantity,
  };
}
