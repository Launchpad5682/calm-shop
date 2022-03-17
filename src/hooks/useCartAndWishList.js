import { useProvider } from "../context/provider-context";

export function useCartAndWishList() {
  const { dispatch } = useProvider();

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: { product: product } });

  const decreaseQuantity = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { product: product, decrement: true },
    });

  const removeFromCart = (product) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: product });

  const addToWishList = (product) =>
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });

  const removeFromWishList = (product) =>
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });

  return {
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList,
    decreaseQuantity,
  };
}
