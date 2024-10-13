import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    const item = items.find((item) => item.id === id);
    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setFoundItem(null);
      setMessage('Item not found!');
    }
  };

  return (
    <div className="search-item-container">
      <h2>Search Item</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
        />
        <button type="submit">Search</button>
      </form>
      {message && <p>{message}</p>}
      {foundItem && (
        <div>
          <h3>Item Details:</h3>
          <table className="item-details-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{foundItem.id}</td>
                <td>{foundItem.name}</td>
                <td>{foundItem.quantity}</td>
                <td>{foundItem.price}</td>
                <td>{foundItem.category}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="button-container"> {}
        <button className="dashbutton" onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  );
};

export default SearchItem;
