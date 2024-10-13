import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="invsys-wrapper">
      <div className="invsys-container">
        <h1>Inventory Management System</h1>
        <div className="buttons-container">
          <button onClick={() => navigate('/add-item')}>Add Item</button>
          <button onClick={() => navigate('/update-item')}>Update Item</button>
          <button onClick={() => navigate('/remove-item')}>Remove Item</button>
          <button onClick={() => navigate('/display-items-category')}>Display Items by Category</button>
          <button onClick={() => navigate('/display-all-items')}>Display All Items</button>
          <button onClick={() => navigate('/search-item')}>Search Item</button>
          <button onClick={() => navigate('/sort-items')}>Sort Items</button>
          <button onClick={() => navigate('/low-stock-items')}>Display Low Stock Items</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;