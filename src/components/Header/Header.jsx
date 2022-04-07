import React from "react";
import "./Header.css";
import {
  BsFillCartFill,
  BsFillHeartFill,
  BsFillPersonBadgeFill,
} from "react-icons/bs";
import { BadgeButton } from "../";
import { useNavigate } from "react-router-dom";
import { useDataProvider } from "../../context/data-context";
import { SearchBar } from "../SearchBar/SearchBar";

export function Header() {
  const navigate = useNavigate();
  const goToProducts = () => navigate("/");

  const { wishlist, cart } = useDataProvider();
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
      <SearchBar />
      <nav className="">
        <ul className="nav__list">
          <BadgeButton count={wishlist?.length} path="/wishlist">
            <BsFillHeartFill />
          </BadgeButton>
          <BadgeButton count={cart?.length} path="/cart">
            <BsFillCartFill />
          </BadgeButton>
          <BadgeButton count={null} path="/user">
            <BsFillPersonBadgeFill />
          </BadgeButton>
        </ul>
      </nav>
    </header>
  );
}
