import React from "react";

export function FieldInput({
  name,
  type,
  value,
  changeHandler,
  displayName,
  ...props
}) {
  return (
    <div className="field__container">
      <div className="inputbox__container">
        <input
          type={type}
          autoComplete="off"
          className="input--black"
          required
          name={name}
          value={value}
          onChange={changeHandler}
          {...props}
        />
        <label className="inputbox__label--name label__name--black inputbox__label--blue">
          <span className="inputbox__label--content">{displayName}</span>
        </label>
      </div>
    </div>
  );
}
