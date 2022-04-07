import React from "react";
import { useNavigate } from "react-router-dom";
import { OutlineButton } from "../../components";
import { useDataProvider } from "../../context/data-context";
import { getCartTotal } from "../../utils";
import "./OrderSummary.css";

export function OrderSummary() {
  const {
    cart,
    order: { address },
  } = useDataProvider();

  const cartTotal = getCartTotal(cart);
  const { totalActualPrice, totalPrice, saved, count } = cartTotal;
  const { name, street, city, state, country, zipCode, mobile } = address;
  const navigate = useNavigate();
  return (
    <div className="order--main__section">
      <span className="h4__typography typography--black">
        You have successfully placed the order 🎉🎉
      </span>
      <div className="card__flexcolumn card__flexcolumn--lg card__shadow card__border--black">
        <div className="cart--detail">
          <div className="h6__typography typography--black bold--typography border--bottom">
            ORDER DETAILS
          </div>
          {cart.map(({ title, discountedPrice }) => (
            <div className="price--item">
              <span className="subtitle1__typography">{title}</span>
              <span className="subtitle1__typography">
                Rs {discountedPrice}
              </span>
            </div>
          ))}
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
          <>
            <div class="h6__typography typography--black">{name}</div>
            <div className="h6__typography typography--black">
              {street}, {city}, {state}, {country}
            </div>
            <div className="h6__typography typography--black">{zipCode}</div>
            <div className="h6__typography typography--black">{mobile}</div>
          </>
        </div>
      </div>
      <OutlineButton
        caption="Go to Products"
        icon={null}
        clickHandler={() => {
          navigate("/products");
        }}
      />
    </div>
  );
}
