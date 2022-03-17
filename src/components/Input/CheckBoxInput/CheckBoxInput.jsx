import React from "react";

export function CheckBoxInput({
  name,
  id,
  value,
  checked,
  checkHandler,
  displayName,
}) {
  return (
    <label className="filter__input--options">
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={checkHandler}
      />
      <span className="subtitle1__typography typography--black">
        {displayName}
      </span>
    </label>
  );
}
