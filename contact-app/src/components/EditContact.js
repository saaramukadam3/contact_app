import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const EditContact = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email, phone, address } = location.state.contact; // Include phone and address
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone || ''); // Initialize with existing phone, or empty string if null/undefined
  const [newAddress, setNewAddress] = useState(address || ''); // Initialize with existing address, or empty string
  
  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "" || newPhone === "" || newAddress === "") { // Updated condition
      alert("All fields are mandatory!"); // Adjust message if needed
      return;
    }

    // Construct the updated contact object
    const updatedContact = {
      id,
      name: newName,
      email: newEmail,
      phone: newPhone,
      address: newAddress
    };

   props.updateContactHandler(updatedContact); 
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
