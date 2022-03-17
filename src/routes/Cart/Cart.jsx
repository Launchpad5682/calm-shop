import React from "react";
import CartPriceCard from "../../components/Cart/CartPriceCard/CartPriceCard";
import { EmptyCart } from "../../components/Cart/EmptyCart/EmptyCart";
import { ProductCartCard } from "../../components/Cart/ProductCartCard/ProductCartCard";
import { useProvider } from "../../context/provider-context";
import { getCartTotal } from "../../utils";
import "./Cart.css";

export function Cart() {
  const { cart } = useProvider();
  const { products } = cart;

  const cartTotal = getCartTotal(cart);
  return (
    <main className="cart__section padding--sm">
      {products.length > 0 ? (
        <>
          <div className="wishlist--cards">
            {products?.map((product) => (
              <ProductCartCard key={product._id} product={product} />
            ))}
          </div>
          <div>
            <CartPriceCard cartTotal={cartTotal} />
          </div>
        </>
      ) : (
        <EmptyCart caption="EMPTY CART" />
      )}
    </main>
  );
}
