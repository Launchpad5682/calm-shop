import React from "react";
import { SolidButton } from "../../components";
import { useAuthProvider } from "../../context/auth-context";
import "./User.css";

export function User() {
  const {
    user: { firstName, lastName, email },
    logout,
  } = useAuthProvider();

  return (
    <div className="user__profile--section">
      <div className="card__flexrow card__flexrow--lg card__shadow--black">
        <div class="user__profile--container">
          <div class="h6__typography typography--black">
            Name: {firstName} {lastName}
          </div>
          <div className="h6__typography typography--black">Email: {email}</div>
          <div className="btn--bottom">
            <SolidButton caption="Log Out" icon={null} clickHandler={logout} />
          </div>
        </div>
      </div>
    </div>
  );
}
