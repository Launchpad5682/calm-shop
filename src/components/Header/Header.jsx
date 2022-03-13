import React from 'react'
import "./Header.css"
import { BsFillCartFill, BsFillHeartFill, BsFillPersonBadgeFill, BsSearch } from "react-icons/bs"

export function Header() {
    return (
        <header class="header header--dark">
            <span class="logo">
                <img src="https://yifgzyyqlpgydlzwcsaj.supabase.in/storage/v1/object/public/calm-shop-books/calm-shop-logo.png" alt="" class="logo--img" />
                <h6 class="h4__typography typography--white header__title">
                    Calm Shop
                </h6>
            </span>
            <div class="search__container">
                <input type="text" name="" id="" class="search__input" />
                <span class="search__btn"><BsSearch /></span>
            </div>
            <nav class="">
                <ul class="nav__list">
                    <button class="badge__icon badge__icon--blue">
                        <span class="badge__icon--counter icon__counter--pink">100</span>
                        <BsFillHeartFill />
                    </button>
                    <button class="badge__icon badge__icon--blue">
                        <BsFillCartFill />
                    </button>
                    <button class="badge__icon badge__icon--blue">
                        <BsFillPersonBadgeFill />
                    </button>
                    <button
                        class="button--sm button__solid button--blue button__rounded--lg"
                    >
                        <span class="button__typography typography--white">Logout</span>
                    </button>
                </ul>
            </nav>
        </header>
    )
}
