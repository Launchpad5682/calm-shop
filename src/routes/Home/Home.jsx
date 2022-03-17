import React from "react";
import { useNavigate } from "react-router-dom";
import { useDataProvider } from "../../context/data-provider-context.js";
import "./Home.css";
import { HomeCategoryCard } from "./HomeCategoryCard/HomeCategoryCard.jsx";

export function Home() {
  const navigate = useNavigate();
  const { categories } = useDataProvider();

  return (
    <main className="main__section">
      <div className="image__container">
        <div className="img--tagline">
          <img
            src="https://images.unsplash.com/photo-1525720171842-a4992f22f70d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgwfHxib29rcyUyMGFuZCUyMGVubGlnaHRlbm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="cover_img"
            className="image__fit"
          />
        </div>
        <div className="tagline">
          <span className="h5__typography typography--white">
            A store to get all the books for mindful development
          </span>
          <button
            className="button--lg button__solid button--blue button__rounded--lg"
            onClick={() => {
              navigate("/products");
            }}
          >
            <span className="button__typography typography--white">
              Explore <span className="fa fa-arrow-right"></span>
            </span>
          </button>
        </div>
      </div>
      <h4 className="h4__typography center__typography padding--sm">
        Categories
      </h4>
      <div className="grid-2-item padding--sm">
        {categories?.categories?.map((category) => (
          <HomeCategoryCard category={category} key={category._id} />
        ))}
      </div>
    </main>
  );
}
