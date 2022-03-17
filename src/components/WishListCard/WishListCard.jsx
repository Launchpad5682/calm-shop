import React from "react";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { useCartAndWishList } from "../../hooks/useCartAndWishList";
import { OutlineButton } from "../Button/OutlineButton";
import { SolidButton } from "../Button/SolidButton";

export function WishListCard({ product }) {
  const { title, author, discountedPrice, actualPrice, path } = product;

  const { addToCart, removeFromWishList } = useCartAndWishList();
  return (
    <div className="card__flexcolumn card__flexcolumn--md card__border--black shopping--card">
      <div className="item--image">
        <img src={path} className="image--fitwidth img--fitheight" />
      </div>
      <div className="card--detail">
        <div className="">
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
              {actualPrice}
            </span>
          </div>
        </div>
        <div className="card--btns">
          <OutlineButton
            caption="Remove from Wishlist"
            icon={<BsFillHeartFill />}
            clickHandler={() => removeFromWishList(product)}
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
