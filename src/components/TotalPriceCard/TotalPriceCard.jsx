import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../context/auth-context";
import { useDataProvider } from "../../context/data-context";
import { getCartTotal } from "../../utils";
import { SolidButton } from "../Button/SolidButton";

export function TotalPriceCard({ type }) {
  const {
    cart,
    order: { address },
    dispatch,
  } = useDataProvider();
  const {
    user: { firstName, lastName, email },
  } = useAuthProvider();

  const { name, street, city, state, country, zipCode, mobile } = address;
  const cartTotal = getCartTotal(cart);
  const { totalActualPrice, totalPrice, saved, count } = cartTotal;
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
    dispatch({ type: "UPDATE_TOTAL", payload: totalPrice });
  };

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.error("Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: "rzp_test_HMKF0KGT3EISBm",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Calm Shop",
      description: "Thank you for shopping with us",
      image:
        "https://yifgzyyqlpgydlzwcsaj.supabase.in/storage/v1/object/public/calm-shop-books/calm-shop-logo.png",
      handler: function (response) {
        dispatch({ type: "SET_CART", payload: [] });
        navigate("/order-summary");
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email: email,
        contact: "9999994444",
      },
      theme: {
        color: "#007bb5",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
          clickHandler={
            type === "cart"
              ? () => navigateToCheckout()
              : () => displayRazorpay()
          }
        />
      </div>
    </div>
  );
}
