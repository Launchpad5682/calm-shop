import axios from "axios";
import { useDataProvider } from "../context/data-context";
import { useAuthProvider } from "../context/auth-context";
import { isProductInCart, isProductInWishlist } from "../utils";
import { useNavigate } from "react-router-dom";

export function useCartAndWishList() {
  const { cart, wishlist, dispatch } = useDataProvider();
  const { token } = useAuthProvider();
  const navigate = useNavigate();

  const addToCart = async (product) => {
    if (token) {
      if (isProductInCart(product, cart)) {
        navigate("/cart");
      } else {
        try {
          const response = await axios.post(
            "/api/user/cart",
            { product: product },
            { headers: { authorization: token } }
          );
          if (response.status === 201) {
            dispatch({ type: "SET_CART", payload: response.data.cart });
            dispatch({
              type: "ACTIVATE_ALERT",
              payload: { message: "Item added to cart", color: "green" },
            });
          }
        } catch (error) {
          console.error("Error while loading cart");
        }
      }
    } else {
      dispatch({
        type: "ACTIVATE_ALERT",
        payload: { message: "You need to login", color: "red" },
      });
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
    if (product.qty === 1) {
      removeFromCart(product);
    } else {
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
    }
  };

  const removeFromCart = async (product) => {
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: { authorization: token },
      });
      dispatch({ type: "SET_CART", payload: response.data.cart });
      dispatch({
        type: "ACTIVATE_ALERT",
        payload: { message: "Item removed from wishlist", color: "red" },
      });
    } catch (error) {
      console.error("Error while loading cart");
    }
  };

  const addToWishList = async (product) => {
    if (token) {
      if (isProductInWishlist(product, wishlist)) {
        removeFromWishList(product);
      } else {
        try {
          const response = await axios.post(
            "/api/user/wishlist",
            { product: product },
            { headers: { authorization: token } }
          );
          if (response.status === 201) {
            dispatch({
              type: "SET_WISHLIST",
              payload: response.data.wishlist,
            });
            dispatch({
              type: "ACTIVATE_ALERT",
              payload: { message: "Item added to wishlist", color: "green" },
            });
          }
        } catch (error) {
          console.error("Error while loading cart");
        }
      }
    } else {
      dispatch({
        type: "ACTIVATE_ALERT",
        payload: { message: "You need to login", color: "red" },
      });
    }
  };
  const removeFromWishList = async (product) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        dispatch({ type: "SET_WISHLIST", payload: response.data.wishlist });
        dispatch({
          type: "ACTIVATE_ALERT",
          payload: { message: "Item removed from wishlist", color: "red" },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList,
    increaseQuantity,
    decreaseQuantity,
  };
}
