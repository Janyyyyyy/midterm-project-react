import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = ({ addItem, items }) => { 
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleAddItem = (e) => {
    e.preventDefault();

    
    const idExists = items.some(item => item.id === id);

    if (idExists) {
      setMessage('ID already in use. Please choose a different one.');
    } else if (id && name && quantity && price) {
      addItem({ id, name, quantity: parseInt(quantity), price: parseFloat(price), category });
      setMessage('New item added to the list!');
    
      
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('Clothing');
    } else {
      setMessage('Please fill out all fields!');
    }
  };

  return (
    <div className="add-item-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleAddItem} className="add-item-form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
          required
          className="add-item-input"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="add-item-input"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
          className="add-item-input"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          className="add-item-input"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="add-item-select">
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit" className="add-item-button">Add Item</button>
      </form>
      {message && <p className="add-item-message">{message}</p>}

      {}
      <button className="add-item-button" onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
};

export default AddItem;
