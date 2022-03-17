import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeCategoryCard.css";

export function HomeCategoryCard({ category }) {
  const { displayName, path } = category;

  const navigate = useNavigate();
  const navigateByCategory = () => {
    navigate("/products");
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
