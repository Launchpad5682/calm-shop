import { useDataProvider } from "../context/data-provider-context";

export function useCartAndWishList() {
  const { dispatch } = useDataProvider();

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: { product: product } });

  const increaseQuantity = (product) =>
    dispatch({
      type: "INCREASE_QUANTITY_PRODUCT_IN_CART",
      payload: { product: product },
    });

  const decreaseQuantity = (product) =>
    dispatch({
      type: "DECREASE_QUANTITY_PRODUCT_IN_CART",
      payload: { product: product },
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
    increaseQuantity,
    decreaseQuantity,
  };
}
