import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const DisplayLowStock = ({ items }) => {
  const lowStockItems = items.filter((item) => item.quantity <= 5);
  const navigate = useNavigate(); 

  return (
    <div className='low-items-container'>
      <h2>Low Stock Items</h2>
      {lowStockItems.length > 0 ? (
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
            {lowStockItems.map((item) => (
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
        <p>No Low Stock Items.</p>
      )}
      <div className="button-container"> {}
        <button className="dashbutton" onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  );
};

export default DisplayLowStock;
