import React from "react";
import "./EmptyCart.css";

export function EmptyCart({ caption }) {
  return (
    <div className="full__page--vector">
      <div className="vector--container">
        <img
          src="https://yifgzyyqlpgydlzwcsaj.supabase.in/storage/v1/object/public/calm-shop-books/cart.png"
          className="image__fit"
          alt=""
        />
      </div>
      <span className="h3__typography">{caption}</span>
    </div>
  );
}
