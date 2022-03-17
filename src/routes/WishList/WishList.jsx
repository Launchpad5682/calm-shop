import React from "react";
import { EmptyCart } from "../../components/Cart/EmptyCart/EmptyCart";
import { WishListCard } from "../../components/WishListCard/WishListCard";
import { useProvider } from "../../context/provider-context";
import "./WishList.css";

export function WishList() {
  const { wishlist } = useProvider();
  const { products } = wishlist;
  return (
    <main className="wishlist__section">
      {products.length > 0 ? (
        <div className="grid-5-items">
          {products?.map((product) => (
            <WishListCard product={product} key={product._id} />
          ))}
        </div>
      ) : (
        <EmptyCart caption="EMPTY WISHLIST" />
      )}
    </main>
  );
}
