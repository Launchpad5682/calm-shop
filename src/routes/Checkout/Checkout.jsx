import axios from "axios";
import React, { useEffect } from "react";
import { SolidButton, TotalPriceCard } from "../../components";
import { AddressCard } from "../../components/AddressCard/AddressCard";
import { Modal } from "../../components/Modal/Modal";
import { useAuthProvider } from "../../context/auth-context";
import { useDataProvider } from "../../context/data-context";
import { AiOutlinePlus } from "react-icons/ai";
import "./Checkout.css";

export function Checkout() {
  const { modal, addresses, order, dispatch } = useDataProvider();
  const { token } = useAuthProvider();

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get("/api/user/address", {
            headers: { authorization: token },
          });
          if (response.status === 200) {
            const { address } = response.data;
            dispatch({ type: "SET_ADDRESSES", payload: address });
          }
        } catch (error) {
          console.error("Error while addresses", error);
        }
      })();
    }
  }, [dispatch, token]);

  const addAddress = () => dispatch({ type: "TOGGLE_MODAL" });

  const addressSelector = (address) =>
    dispatch({ type: "SET_ORDER_ADDRESS", payload: address });

  return (
    <div className="checkout--main__section padding--xs">
      <div className="address--card__container">
        {addresses.map((address) => (
          <AddressCard
            key={address._id}
            address={address}
            checked={order.address._id}
            changeHandler={() => addressSelector(address)}
          />
        ))}
        <SolidButton
          caption="Add Address"
          export
          icon={<AiOutlinePlus />}
          clickHandler={addAddress}
        />
      </div>
      <TotalPriceCard type="checkout" />
      {modal && <Modal />}
    </div>
  );
}
