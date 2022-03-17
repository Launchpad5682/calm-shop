import React from "react";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { OutlineButton } from "../../components/Button/OutlineButton";
import { SolidButton } from "../../components/Button/SolidButton";
import { useProvider } from "../../context/provider-context";
import { useCartAndWishList } from "../../hooks/useCartAndWishList";
import "./SingleProductPage.css";

export function SingleProductPage() {
  const param = useParams();
  const { id } = param;
  const { products } = useProvider();
  const product = products.products?.find((product) => product._id === id);

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
            <div>
              <span className="icon__typography typography--yellow">
                <span className="fa fa-star"></span>
              </span>
              <span className="icon__typography typography--yellow">
                <span className="fa fa-star"></span>
              </span>
              <span className="icon__typography typography--yellow">
                <span className="fa fa-star"></span>
              </span>
              <span className="icon__typography typography--white">
                <span className="fa fa-star"></span>
              </span>
              <span className="icon__typography typography--white">
                <span className="fa fa-star"></span>
              </span>
            </div>
            <div>
              <span className="h5__typography typography--black">
                Rs {discountedPrice}
              </span>
              <span className="h5__typography typography--black strike__line">
                {actualPrice}
              </span>
            </div>
            <div className="body1__typography">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores molestiae dolores, nostrum maiores corrupti pariatur
              quae. Distinctio repellendus magnam sequi autem nihil in quisquam
              animi. Ipsam aut voluptatibus veniam sint? */}
            </div>
            <div className="order--props">
              {/* <span className="h6__typography">Fast Delivery</span>
              <span className="h6__typography">East Returns</span>
              <span className="h6__typography">Fast Delivery</span>
              <span className="h6__typography">East Returns</span> */}
            </div>
            <div className="button--bottom">
              <OutlineButton
                caption="Add to Wishlist"
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
