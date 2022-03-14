import React from "react";

export function SliderInput({
  name,
  value,
  id,
  low,
  high,
  sliderChangeHandler,
}) {
  return (
    <div className="slider__container">
      <input
        type="range"
        name={name}
        value={value}
        id={id}
        min={low}
        max={high}
        onChange={sliderChangeHandler}
        className="input__slider input__slider--blue"
      />
      <div className="slider__label">
        <span className="subtitle1__typography typography typography--black">
          {low}
        </span>
        <span
          className="subtitle1__typography typography typography--black"
          id="slider-current-value"
        >
          {value}
        </span>
        <span className="subtitle1__typography typography typography--black">
          {high}
        </span>
      </div>
    </div>
  );
}
