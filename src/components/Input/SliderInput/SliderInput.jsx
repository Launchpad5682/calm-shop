import React from "react";

export function SliderInput({
  name,
  value,
  id,
  low,
  high,
  step,
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
        step={step}
        onChange={sliderChangeHandler}
        className="input__slider input__slider--blue"
      />
      <div className="slider__label">
        <span
          className="subtitle1__typography typography typography--black"
          id="slider-current-value"
        >
          {value}
        </span>
      </div>
    </div>
  );
}
