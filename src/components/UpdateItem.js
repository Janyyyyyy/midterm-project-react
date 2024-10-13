import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const UpdateItem = ({ updateItem }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity'); 
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 
  const handleUpdateItem = (e) => {
    e.preventDefault();
    const result = updateItem(id, field, newValue);
    if (result) {
      setMessage(`Item ${field} updated successfully!`);
    } else {
      setMessage(`Error: Unable to update item ${field}. Please try again!`);
    }
    setId('');
    setNewValue('');
  };

  return (
    <div className="update-container">
      <h2>Update Item</h2>
      <form onSubmit={handleUpdateItem} className="form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
          className="update-item-input"
        />
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="select"
        >
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="New Value"
          required
          className="update-item-input"
        />
        <button type="submit" className="button">
          Update Item
        </button>
      </form>
      {message && <p className="message">{message}</p>}

      <button onClick={() => navigate('/')} className="button">
        Go Back
      </button>
    </div>
  );
};

export default UpdateItem;
