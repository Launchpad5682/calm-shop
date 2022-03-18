import React from "react";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useCartAndWishList } from "../../hooks/useCartAndWishList";
import { OutlineButton } from "../";
import { SolidButton } from "../";
import "./ProductCard.css";

export function ProductCard({ product }) {
  const { title, author, actualPrice, discountedPrice, path } = product;

  const navigate = useNavigate();
  const { addToCart, addToWishList } = useCartAndWishList();

  const navigateToSingleProductPage = () =>
    navigate(`/products/${product._id}`);
  return (
    <div className="card__flexcolumn card__flexcolumn--md card__border--black shopping--card">
      <div className="item--image" onClick={navigateToSingleProductPage}>
        <img src={path} className="image--fitwidth img--fitheight" />
      </div>
      <div className="card--detail">
        <div className="" onClick={navigateToSingleProductPage}>
          <span className="h6__typography typography--black bold--typography">
            {title}
          </span>
          <span className="subtitle1__typography typography--black">
            {author}
          </span>
          <div className="card--price">
            <span className="subtitle1__typography typography--black bold--typography">
              Rs {discountedPrice}
            </span>
            <span className="subtitle1__typography typography--black strike__line">
              Rs {actualPrice}
            </span>
          </div>
        </div>
        <div className="card--btns">
          <OutlineButton
            caption="Add to Wishlist"
            icon={<BsFillHeartFill />}
            clickHandler={() => addToWishList(product)}
          />
          <SolidButton
            caption="Add to Cart"
            icon={<BsFillCartFill />}
            clickHandler={() => addToCart(product)}
          />
        </div>
      </div>
    </div>
  );
}
