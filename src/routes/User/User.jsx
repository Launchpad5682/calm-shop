import React from "react";
import { SolidButton } from "../../components";
import { useAuthProvider } from "../../context/auth-context";
import { useDataProvider } from "../../context/data-context";
import "./User.css";

export function User() {
  const {
    user: { firstName, lastName, email },
    logout,
  } = useAuthProvider();
  const { dispatch } = useDataProvider();

  const logoutHandler = () => {
    dispatch({ type: "SET_CART", payload: [] });
    dispatch({ type: "SET_WISHLIST", payload: [] });
    dispatch({ type: "SET_ADDRESSES", payload: [] });
    logout();
  };

  return (
    <div className="user__profile--section">
      <div className="card__flexrow card__flexrow--lg card__shadow--black">
        <div className="user__profile--container">
          <div className="h6__typography typography--black">
            Name: {firstName} {lastName}
          </div>
          <div className="h6__typography typography--black">Email: {email}</div>
          <div className="btn--bottom">
            <SolidButton
              caption="Log Out"
              icon={null}
              clickHandler={logoutHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
