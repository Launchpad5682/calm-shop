export const isProductInCart = (product, cart) => {
  const found = cart.find((pro) => pro._id === product._id);
  return found === undefined ? false : true;
};
