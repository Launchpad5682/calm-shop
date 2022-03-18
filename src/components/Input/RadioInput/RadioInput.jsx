import React from "react";

export function RadioInput({
  name,
  id,
  displayName,
  value,
  checked,
  changeHandler,
}) {
  return (
    <label className="filter__input--options">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked === value}
        onChange={changeHandler}
      />
      <span className="subtitle1__typography typography--black">
        {displayName}
      </span>
    </label>
  );
}
