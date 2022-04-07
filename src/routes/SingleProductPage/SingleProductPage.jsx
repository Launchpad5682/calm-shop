import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { OutlineButton } from "../../components/Button/OutlineButton";
import { SolidButton } from "../../components/Button/SolidButton";
import { useDataProvider } from "../../context/data-context";
import { useCartAndWishList } from "../../hooks/useCartAndWishList";
import { isProductInWishlist } from "../../utils";
import "./SingleProductPage.css";

export function SingleProductPage() {
  const { wishlist } = useDataProvider();
  // const product = products.products?.find((product) => product._id === id);
  const [isInWishList, setIsInWishList] = useState();

  const [product, setProduct] = useState({});
  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.split("/")[2];
    (async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        const { data } = response;
        setProduct({ ...data.product });
        setIsInWishList(isProductInWishlist(data.product, wishlist));
      } catch (error) {
        console.error("Error from video page", error);
      }
    })();
  }, [pathname, wishlist]);

  const { addToCart, addToWishList } = useCartAndWishList();
  if (product) {
    const { title, path, discountedPrice, actualPrice } = product;
    return (
      <main className="single--product--section">
        <div className="product--card">
          <div className="img--container">
            <img src={path} alt="" className="image__fit" />
          </div>
          <div className="container">
            <span className="h4__typography typography--black">{title}</span>
            <div className="price--container">
              <span className="h5__typography typography--black">
                Rs {discountedPrice}
              </span>
              <span className="h5__typography typography--black strike__line">
                {actualPrice}
              </span>
            </div>
            <div className="button--bottom">
              <OutlineButton
                caption={isInWishList ? "In a Wishlist" : "Add to Wishlist"}
                icon={<BsFillHeartFill />}
                clickHandler={() => addToWishList(product)}
              />
              <SolidButton
                caption="Add to Cart"
                icon={<BsFillCartFill />}
                clickHandler={() => addToCart(product)}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }

  return <div>SingleProductPage</div>;
}
