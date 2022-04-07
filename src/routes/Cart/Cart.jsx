// import axios from "axios";
import React from "react";
import { EmptyCart } from "../../components/";
import { ProductCartCard } from "../../components/";
import { TotalPriceCard } from "../../components";
import { useDataProvider } from "../../context/data-context";
import "./Cart.css";

export function Cart() {
  const { cart } = useDataProvider();

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
            <TotalPriceCard type="cart" />
          </div>
        </>
      ) : (
        <EmptyCart caption="EMPTY CART" />
      )}
    </main>
  );
}
