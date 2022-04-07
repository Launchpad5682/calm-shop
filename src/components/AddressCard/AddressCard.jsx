import axios from "axios";
import React from "react";
import { useAuthProvider } from "../../context/auth-context";
import { useDataProvider } from "../../context/data-context";
import { OutlineButton } from "../Button/OutlineButton";
import { SolidButton } from "../Button/SolidButton";
import "./AddressCard.css";

export function AddressCard({ address, checked, changeHandler }) {
  const { _id, name, street, city, state, country, zipCode, mobile } = address;

  const { dispatch } = useDataProvider();
  const { token } = useAuthProvider();

  const editHandler = (address) => {
    dispatch({
      type: "SET_SELECTED_ADDRESS",
      payload: { address: address, edit: true },
    });
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const deleteHandler = async (address) => {
    if (token) {
      try {
        const response = await axios.delete(
          `/api/user/address/${address._id}`,
          {
            headers: { authorization: token },
          }
        );
        if (response.status === 200) {
          const { address } = response.data;
          dispatch({ type: "SET_ADDRESSES", payload: address });
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="card__flexrow card__flexrow--lg card__shadow--black address--fit__height">
      <div class="container">
        <label class="h6__typography typography--black">
          <input
            type="radio"
            name={name}
            id={_id}
            value={_id}
            checked={checked === _id}
            onChange={changeHandler}
          />
          {name}
        </label>
        <div className="h6__typography typography--black">
          {street}, {city}, {state}, {country}
        </div>
        <div className="h6__typography typography--black">{zipCode}</div>
        <div className="h6__typography typography--black">{mobile}</div>
        <div className="address--btn__container">
          <SolidButton
            caption="Edit"
            icon={null}
            clickHandler={() => editHandler(address)}
          />
          <OutlineButton
            caption="Delete"
            icon={null}
            clickHandler={() => deleteHandler(address)}
          />
        </div>
      </div>
    </div>
  );
}
