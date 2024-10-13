import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayItems = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="inventory-items">
      <h2>Inventory Items</h2>
      
      {items.length > 0 ? (
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
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Items in this inventory.</p>
      )}
      <div className="allitems-button-container">
        <button className="dashbutton" onClick={() => navigate('/')}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DisplayItems;