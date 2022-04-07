import axios from "axios";
import React, { useRef, useState } from "react";
import { BsX } from "react-icons/bs";
import { useAuthProvider } from "../../context/auth-context";
import { useDataProvider } from "../../context/data-context";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { FieldInput } from "../Input/FieldInput/FieldInput";
import "./Modal.css";

export function Modal() {
  const modalRef = useRef();
  const {
    selectedAddress: { address, edit },
    dispatch,
  } = useDataProvider();
  const { token } = useAuthProvider();

  const [form, setForm] = useState({
    name: address?.name ?? "",
    street: address?.street ?? "",
    city: address?.city ?? "",
    state: address?.state ?? "",
    country: address?.country ?? "",
    zipCode: address?.zipCode ?? "",
    mobile: address?.mobile ?? "",
  });

  const resetForm = () => {
    dispatch({
      type: "SET_SELECTED_ADDRESS",
      payload: {
        address: {
          name: null,
          street: null,
          city: null,
          state: null,
          country: null,
          zipCode: null,
          mobile: null,
        },
        edit: false,
      },
    });
    setForm({
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    });
  };

  const changeHandler = (e) => {
    const target = e.target.name;
    setForm((prev) => ({ ...prev, [target]: e.target.value }));
  };

  const modalOff = () => {
    dispatch({ type: "TOGGLE_MODAL" });
    resetForm();
  };

  useOnClickOutside(modalRef, modalOff);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit on modal");
    if (edit) {
      try {
        const response = await axios.post(
          `/api/user/address/${address._id}`,
          {
            address: form,
          },
          { headers: { authorization: token } }
        );
        console.log(response);
        if (response.status === 200) {
          const { address } = response.data;
          dispatch({ type: "SET_ADDRESSES", payload: address });
          dispatch({ type: "TOGGLE_MODAL" });
          resetForm();
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const response = await axios.post(
          "/api/user/address",
          {
            address: form,
          },
          { headers: { authorization: token } }
        );
        if (response.status === 201) {
          const { address } = response.data;
          dispatch({ type: "SET_ADDRESSES", payload: address });
          dispatch({ type: "TOGGLE_MODAL" });
          resetForm();
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="fullscreen modal">
      <div className="modal__container modal__container--white" ref={modalRef}>
        <div className="modal__container--header">
          <span className="h6__typography typography--black">
            {edit ? "Edit Address" : "Add Address"}
          </span>
          <span className="h6__typography typography--black" onClick={modalOff}>
            <BsX />
          </span>
        </div>
        <div className="modal__container--body">
          <form className="address--form" onSubmit={submitHandler}>
            <FieldInput
              name="name"
              type="text"
              changeHandler={changeHandler}
              value={form.name}
              displayName="Name"
            />
            <FieldInput
              name="street"
              type="text"
              changeHandler={changeHandler}
              value={form.street}
              displayName="Street"
            />
            <FieldInput
              name="city"
              type="text"
              changeHandler={changeHandler}
              value={form.city}
              displayName="City"
            />
            <FieldInput
              name="state"
              type="text"
              changeHandler={changeHandler}
              value={form.state}
              displayName="State"
            />
            <FieldInput
              name="country"
              type="text"
              changeHandler={changeHandler}
              value={form.country}
              displayName="Country"
            />
            <FieldInput
              name="zipCode"
              type="text"
              changeHandler={changeHandler}
              value={form.zipCode}
              displayName="Zip Code"
              maxLength="6"
              inputMode="numeric"
            />
            <FieldInput
              name="mobile"
              type="phone"
              changeHandler={changeHandler}
              value={form.mobile}
              displayName="Mobile No."
            />
            <button
              type="submit"
              className="button--sm button__solid button--blue button__rounded--lg"
            >
              <span className="button__typography typography--white">
                {edit ? "Edit" : "Add"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
