export const getCartTotal = (cart) => {
  const { products } = cart;
  const { totalActualPrice, totalPrice, count } = products.reduce(
    (acc, curr) => ({
      ...acc,
      totalActualPrice:
        acc.totalActualPrice + Number(curr.quantity) * Number(curr.actualPrice),
      totalPrice:
        acc.totalPrice + Number(curr.quantity) * Number(curr.discountedPrice),
      count: acc.count + Number(curr.quantity),
    }),
    {
      totalActualPrice: 0,
      totalPrice: 0,
      count: 0,
    }
  );

  const saved = Number(totalActualPrice) - Number(totalPrice);
  return { totalActualPrice, totalPrice, saved, count };
};
