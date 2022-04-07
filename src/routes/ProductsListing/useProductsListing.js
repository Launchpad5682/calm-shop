import { useDataProvider } from "../../context/data-context";

export function useProductsListing() {
  const { products, filters, searchTerm, loading } = useDataProvider();
  const { sortBy, priceUpperRange, filterRating, categories } = filters;

  const sortProducts = (products) => {
    // sort() uses in-place sorting
    const temp = [...products];
    if (sortBy === "LOW_TO_HIGH") {
      return temp.sort(
        (first, second) =>
          Number(first.discountedPrice) - Number(second.discountedPrice)
      );
    } else if (sortBy === "HIGH_TO_LOW") {
      return temp.sort(
        (first, second) =>
          Number(second.discountedPrice) - Number(first.discountedPrice)
      );
    }
    return products;
  };

  const productsInRange = (products, range) => {
    if (products?.length > 0 && range) {
      return [
        ...products.filter(
          (product) => Number(product.discountedPrice) < Number(range)
        ),
      ];
    }
    return products;
  };

  const ratingFilter = (products, rating) => {
    if (products?.length > 0 && rating) {
      return [...products.filter((product) => Number(product.rating) > rating)];
    }
    return products;
  };

  const categoryFilter = (products, categories) => {
    const categoryFilter = Object.values(categories).reduce(
      (acc, curr) => acc || curr,
      false
    );
    const set = Object.keys(categories).filter(
      (key) => categories[key] === true
    );
    if (categoryFilter === true) {
      const arr = [
        ...products.filter((product) => set.includes(product.categoryName)),
      ];
      return arr;
    }

    return products;
  };

  const searchProducts = (products, searchTerm) => {
    return products.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const sortedProducts = sortProducts(products?.products);
  const ratingFilteredProducts = ratingFilter(sortedProducts, filterRating);
  const categoryFilteredProducts = categoryFilter(
    ratingFilteredProducts,
    categories
  );

  const filteredProducts = productsInRange(
    categoryFilteredProducts,
    priceUpperRange
  );

  const processedProducts = searchProducts(filteredProducts, searchTerm);

  return { processedProducts, loading };
}
