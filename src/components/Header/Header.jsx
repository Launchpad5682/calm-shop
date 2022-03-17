import React from "react";
import "./Header.css";
import {
  BsFillCartFill,
  BsFillHeartFill,
  BsFillPersonBadgeFill,
  BsSearch,
} from "react-icons/bs";
import { BadgeButton } from "../BadgeButton/BadgeButton";
import { useNavigate } from "react-router-dom";
import { useProvider } from "../../context/provider-context";
import { getCartTotal } from "../../utils";

export function Header() {
  const navigate = useNavigate();
  const goToProducts = () => navigate("/");

  const { cart, wishlist } = useProvider();
  const { count: cartCount } = getCartTotal(cart);
  return (
    <header className="header header--dark">
      <span className="logo cursor--pointer" onClick={goToProducts}>
        <img
          src="https://yifgzyyqlpgydlzwcsaj.supabase.in/storage/v1/object/public/calm-shop-books/calm-shop-logo.png"
          alt=""
          className="logo--img"
        />
        <h6 className="h4__typography typography--white header__title">
          Calm Shop
        </h6>
      </span>
      <div className="search__container">
        <input type="text" name="" id="" className="search__input" />
        <span className="search__btn">
          <BsSearch />
        </span>
      </div>

      <nav className="">
        <ul className="nav__list">
          <BadgeButton count={wishlist.products.length} path="/wishlist">
            <BsFillHeartFill />
          </BadgeButton>
          <BadgeButton count={cartCount} path="/cart">
            <BsFillCartFill />
          </BadgeButton>
          <BadgeButton count={null} path="">
            <BsFillPersonBadgeFill />
          </BadgeButton>
          <button className="button--sm button__solid button--blue button__rounded--lg">
            <span className="button__typography typography--white">Logout</span>
          </button>
        </ul>
      </nav>
    </header>
  );
}
