import React from "react";
import { useCartAndWishList } from "../../../hooks/useCartAndWishList";
import "./ProductCartCard.css";

export function ProductCartCard({ product }) {
  const { title, discountedPrice, actualPrice, off, path, qty } = product;

  const { removeFromCart, addToWishList, increaseQuantity, decreaseQuantity } =
    useCartAndWishList();
  return (
    <div className="card__flexrow card__flexrow--lg card__border--black">
      <img src={path} className="image__card--fit" alt="" />
      <div className="card--details">
        <span className="h6__typography typography--black bold--typography">
          {title}
        </span>
        <div className="card--heading">
          <span className="subtitle1__typography typography--black bold--typography">
            Rs {discountedPrice}
          </span>
          <span className="subtitle1__typography typography--black strike__line">
            Rs {actualPrice}
          </span>
        </div>
        <span className="subtitle1__typography typography--black">
          {off}% off
        </span>
        <div className="quantity--container">
          <span className="subtitle1__typography typography--black">
            Quantity:
          </span>
          <div className="quantity--btns">
            <button
              className="quantity--btn"
              onClick={() => decreaseQuantity(product)}
            >
              -
            </button>
            <span className="h6__typography">{qty}</span>
            <button
              className="quantity--btn"
              onClick={() => increaseQuantity(product)}
            >
              +
            </button>
          </div>
        </div>
        <div className="btn--container">
          <button
            className="button--sm button__solid button--blue button__rounded--sm card-btn"
            onClick={() => removeFromCart(product)}
          >
            <span className="subtitle1__typography typography--white bold--typography">
              Remove from Cart
            </span>
          </button>
          <button
            className="button--sm button__outline button__outline--blue button__rounded--sm card-btn"
            onClick={() => addToWishList(product)}
          >
            <span className="subtitle1__typography typography--blue bold--typography">
              Move to Wishlist
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
