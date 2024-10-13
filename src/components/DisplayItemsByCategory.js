import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayItemsByCategory = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();  

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setFilteredItems(items.filter(item => item.category === category));
  };

  return (
    <div className="display-items-category-container">
    <h2>Display Items by Category</h2>
    <div className="category-select-container">
      <label htmlFor="category">Select Category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">--Select a Category--</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  
    {filteredItems.length > 0 ? (
      <table className="item-details-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : selectedCategory ? (
      <p>No items found in the selected category.</p>
    ) : (
      <p>Please select a category.</p>
    )}
     <div className="button-container"> {}
  <button className="dashbutton" onClick={() => navigate('/')}>Go Back</button>
  </div>
  </div>
  );
};

export default DisplayItemsByCategory;
