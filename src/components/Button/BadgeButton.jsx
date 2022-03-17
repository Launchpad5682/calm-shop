import React from "react";
import { useNavigate } from "react-router-dom";

export function BadgeButton({ children, count, path }) {
  const navigate = useNavigate();
  const clickHandler = (event) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <button className="badge__icon badge__icon--blue" onClick={clickHandler}>
      {count > 0 && (
        <span className="badge__icon--counter icon__counter--pink">
          {count > 10 ? "10+" : count}
        </span>
      )}
      {children}
    </button>
  );
}
