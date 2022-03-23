import React from "react";
import { SolidButton } from "../../Button/SolidButton";

export function CartPriceCard({ cartTotal }) {
  const { totalActualPrice, totalPrice, saved, count } = cartTotal;
  return (
    <div className="card__flexcolumn card__flexcolumn--lg card__shadow card__border--black">
      <div className="cart--detail">
        <div className="h6__typography typography--black bold--typography border--bottom">
          PRICE DETAILS
        </div>
        <div className="price--item">
          <span className="subtitle1__typography">Price ({count} item)</span>
          <span className="subtitle1__typography">Rs {totalActualPrice}</span>
        </div>
        <div className="price--item">
          <span className="subtitle1__typography">Discount</span>
          <span className="subtitle1__typography">-Rs {saved}</span>
        </div>
        {/* <div className="price--item">
          <span className="subtitle1__typography">Delivery Charges</span>
          <span className="subtitle1__typography">Rs99</span>
        </div> */}
        <div className="total">
          <span className="subtitle1__typography typography--black bold--typography">
            TOTAL AMOUNT
          </span>
          <span className="subtitle1__typography typography--black bold--typography">
            Rs {totalPrice}
          </span>
        </div>
        <span className="subtitle1__typography typography--black">
          You will save Rs {saved} on this order: ;
        </span>
        <SolidButton caption="PLACE THE ORDER" clickHandler={() => {}} />
      </div>
    </div>
  );
}
