import "./ProductsListing.css";
import React from "react";
import { Filters } from "../../components/Filters/Filters";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductsListingContainer } from "./ProductsListingContainer";

export function ProductsListing() {
  const { processedProducts } = ProductsListingContainer();

  return (
    <div className="main--section">
      <Filters />
      <main className="main--grid padding--sm">
        <div className="subheading">
          <span className="h5__typography typography--black bold--typography">
            Products {processedProducts.length}
          </span>
          <button
            className="button--sm button__nav button--red button__rounded--sm button__nav--black filter--btn"
            id="open--filter"
          >
            <span className="button__typography typography--black">Filter</span>
          </button>
        </div>
        {processedProducts.length > 0 ? (
          <div className="grid-4-item padding--sm--vertical">
            {processedProducts?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        ) : (
          <div className="h6__typography">No products to show</div>
        )}
      </main>
    </div>
  );
}
