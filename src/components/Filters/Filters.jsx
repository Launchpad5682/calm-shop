import React from "react";
import { useDataProvider } from "../../context/data-context";
import { CheckBoxInput } from "../";
import { RadioInput } from "../";
import { SliderInput } from "../";
import "./Filters.css";

export function Filters() {
  const { filters, categories, dispatch } = useDataProvider();
  const { categories: filterCategories } = filters;

  const sortPriceHandler = (event) =>
    dispatch({ type: "SORT_PRICE", payload: event.target.value });
  const ratingChangeHandler = (event) =>
    dispatch({ type: "FILTER_RATINGS", payload: event.target.value });
  const priceRangeHandler = (event) =>
    dispatch({ type: "FILTER_PRICE", payload: event.target.value });

  const { sortBy, priceUpperRange, filterRating } = filters;
  const ratings = [
    { displayName: "4 Star & above", value: "4" },
    { displayName: "3 Star & above", value: "3" },
    { displayName: "2 Star & above", value: "2" },
    { displayName: "1 Star & above", value: "1" },
  ];
  return (
    <aside className="aside--grid padding--sm">
      <div className="filter--heading">
        <span className="subtitle2__typography typography--black bold--typography">
          Filters
        </span>
        <div className="close--clear">
          <span
            className="subtitle1__typography typography--black underline--typography cursor--pointer"
            onClick={() => {
              dispatch({ type: "CLEAR_FILTERS" });
            }}
          >
            Clear
          </span>
          <span
            className="icon__typography typography--black filter--btn"
            id="close--filter"
          >
            <span className="fa fa-close"></span>
          </span>
        </div>
      </div>
      <div className="filter--elements">
        <span className="subtitle2__typography typography--black bold--typography">
          Price
        </span>
        <SliderInput
          name=""
          value={priceUpperRange || Number(400)}
          id=""
          low="0"
          high="400"
          step="50"
          sliderChangeHandler={priceRangeHandler}
        />
      </div>
      <div className="filter--elements">
        <span className="subtitle2__typography typography--black bold--typography">
          Category
        </span>
        {categories?.categories?.map((category) => (
          <CheckBoxInput
            name=""
            id={category._id}
            key={category._id}
            value={category.categoryName}
            displayName={category.displayName}
            checked={filterCategories[category.categoryName]}
            checkHandler={(event) =>
              dispatch({
                type: "FILTER_CATEGORIES",
                payload: event.target,
              })
            }
          />
        ))}
      </div>
      <div className="filter--elements">
        <span className="subtitle2__typography typography--black bold--typography">
          Rating
        </span>
        {ratings?.map((rating, index) => (
          <RadioInput
            key={index}
            name=""
            id=""
            displayName={rating.displayName}
            value={rating.value}
            checked={filterRating}
            changeHandler={ratingChangeHandler}
          />
        ))}
      </div>
      <div className="filter--elements">
        <span className="subtitle2__typography typography--black bold--typography">
          Sort by
        </span>
        <RadioInput
          name="PRICE_SORT"
          id=""
          displayName="Price - Low to High"
          value="LOW_TO_HIGH"
          checked={sortBy}
          changeHandler={sortPriceHandler}
        />
        <RadioInput
          name="PRICE_SORT"
          id=""
          displayName="Price - High to Low"
          value="HIGH_TO_LOW"
          checked={sortBy}
          changeHandler={sortPriceHandler}
        />
      </div>
    </aside>
  );
}
