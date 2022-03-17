import React from "react";

export function OutlineButton({ caption, icon, clickHandler }) {
  return (
    <button
      className="button--sm button__outline button__outline--blue button__rounded--sm button__icon button__icon card-btn bold--typography full__width--btn"
      onClick={clickHandler}
    >
      <span className="h6__typography typography--blue">{icon}</span>
      <span className="subtitle1__typography typography--blue">{caption}</span>
    </button>
  );
}
