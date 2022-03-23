// import axios from "axios";
import React from "react";
import { CartPriceCard } from "../../components/";
import { EmptyCart } from "../../components/";
import { ProductCartCard } from "../../components/";
import { useDataProvider } from "../../context/data-context";
import { getCartTotal } from "../../utils/";
import "./Cart.css";

export function Cart() {
  const { cart } = useDataProvider();

  const cartTotal = getCartTotal(cart);

  return (
    <main className="cart__section padding--sm">
      {cart.length > 0 ? (
        <>
          <div className="wishlist--cards">
            {cart?.map((product) => (
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
