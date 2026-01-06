import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regEx.test(email);
  };

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || address === "") {
      alert("All fields are Mandatory!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid Email Address!");
      return;
    }

    props.addContactHandler({ name, email, phone, address });
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
