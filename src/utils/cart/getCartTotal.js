export const getCartTotal = (cart) => {
  const { totalActualPrice, totalPrice, count } = cart.reduce(
    (acc, curr) => ({
      ...acc,
      totalActualPrice:
        acc.totalActualPrice + Number(curr.qty) * Number(curr.actualPrice),
      totalPrice:
        acc.totalPrice + Number(curr.qty) * Number(curr.discountedPrice),
      count: acc.count + Number(curr.qty),
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
