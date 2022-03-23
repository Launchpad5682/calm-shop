export const isProductInWishlist = (product, wishlist) => {
  const found = wishlist.find((pro) => pro._id === product._id);

  return found === undefined ? false : true;
};
