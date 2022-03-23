import React from "react";
import { WishListCard } from "../../components/";
import { EmptyCart } from "../../components/Cart/EmptyCart/EmptyCart";
import { useDataProvider } from "../../context/data-context";
import "./WishList.css";

export function WishList() {
  const { wishlist } = useDataProvider();

  return (
    <main className="wishlist__section">
      {wishlist?.length > 0 ? (
        <div className="grid-5-items">
          {wishlist?.map((product) => (
            <WishListCard product={product} key={product._id} />
          ))}
        </div>
      ) : (
        <EmptyCart caption="EMPTY WISHLIST" />
      )}
    </main>
  );
}
