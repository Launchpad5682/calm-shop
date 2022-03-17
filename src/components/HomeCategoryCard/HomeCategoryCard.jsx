import React from "react";
import { useNavigate } from "react-router-dom";
import { useProvider } from "../../context/provider-context";
import "./HomeCategoryCard.css";

export function HomeCategoryCard({ category }) {
  const { categoryName, displayName, path } = category;
  const { dispatch } = useProvider();
  const navigate = useNavigate();
  const navigateByCategory = () => {
    navigate("/products");
    dispatch({ type: "FILTER_CATEGORIES", payload: { value: categoryName } });
  };

  return (
    <div className="category__card" onClick={navigateByCategory}>
      <div className="category__image">
        <img src={path} className="image__fit" />
      </div>
      <div className="category__card--overlay h4__typography typography--white">
        {displayName}
      </div>
    </div>
  );
}
