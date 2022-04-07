import React from "react";
import { useNavigate } from "react-router-dom";
import { useDataProvider } from "../../context/data-context";
import { getCartTotal } from "../../utils";
import { SolidButton } from "../Button/SolidButton";

export function TotalPriceCard({ type }) {
  const {
    cart,
    order: { address },
  } = useDataProvider();

  const { name, street, city, state, country, zipCode, mobile } = address;
  const cartTotal = getCartTotal(cart);
  const { totalActualPrice, totalPrice, saved, count } = cartTotal;
  const navigate = useNavigate();
  const { dispatch } = useDataProvider();

  const navigateToCheckout = () => {
    navigate("/checkout");
    dispatch({ type: "UPDATE_TOTAL", payload: totalPrice });
  };

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
        <div className="total">
          <span className="subtitle1__typography typography--black bold--typography">
            TOTAL AMOUNT
          </span>
          <span className="subtitle1__typography typography--black bold--typography">
            Rs {totalPrice}
          </span>
        </div>
        <span className="subtitle1__typography typography--green bold--typography">
          You will save Rs {saved} on this order.
        </span>
        {type === "checkout" && (
          <>
            <div class="h6__typography typography--black">{name}</div>
            <div className="h6__typography typography--black">
              {street}, {city}, {state}, {country}
            </div>
            <div className="h6__typography typography--black">{zipCode}</div>
            <div className="h6__typography typography--black">{mobile}</div>
          </>
        )}
        <SolidButton
          caption={type === "cart" ? "Checkout" : "Place the order"}
          clickHandler={type === "cart" ? () => navigateToCheckout() : () => {}}
        />
      </div>
    </div>
  );
}
