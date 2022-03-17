import React from "react";
import "./Header.css";
import {
  BsFillCartFill,
  BsFillHeartFill,
  BsFillPersonBadgeFill,
  BsSearch,
} from "react-icons/bs";

export function Header() {
  return (
    <header className="header header--dark">
      <span className="logo">
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
          <button className="badge__icon badge__icon--blue">
            <span className="badge__icon--counter icon__counter--pink">
              100
            </span>
            <BsFillHeartFill />
          </button>
          <button className="badge__icon badge__icon--blue">
            <BsFillCartFill />
          </button>
          <button className="badge__icon badge__icon--blue">
            <BsFillPersonBadgeFill />
          </button>
          <button className="button--sm button__solid button--blue button__rounded--lg">
            <span className="button__typography typography--white">Logout</span>
          </button>
        </ul>
      </nav>
    </header>
  );
}
